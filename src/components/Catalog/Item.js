import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { useCookies } from "react-cookie";
import arrow from "../../img/arrow_bag.png";

export default function Item({ filters }) {
  const generateSessionID = () => {
    return uuidv4();
  };

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["sessionID"]);
  const [sessionID] = useState(() => {
    const existingSessionID = cookies.sessionID;
    if (existingSessionID) {
      return existingSessionID;
    } else {
      const newSessionID = generateSessionID();
      setCookie("sessionID", newSessionID, { path: "/" });
      return newSessionID;
    }
  });
  const [showBagOverlay, setShowBagOverlay] = useState(false);

  useEffect(() => {
    console.log("Current Filters:", filters);

    const getItems = async () => {
      try {
        if (!filters) return;

        const collections = {
          Sofa: "Sofa",
          Armchair: "Armchair",
          Wardrobe: "Wardrobe",
          Bed: "Bed",
        };

        let allItems = [];

        for (const collectionName of Object.values(collections)) {
          const snapshot = await db.collection(collectionName).get();

          const promises = snapshot.docs.map(async (doc) => {
            const productData = doc.data();
            if (!productData.price) {
              console.error(
                `Error: Price is undefined for document with ID ${doc.id}`
              );
              return null;
            }
            const imageUrl = await storage
              .refFromURL(productData.img)
              .getDownloadURL();
            return {
              id: doc.id,
              product_name: productData.product_name,
              color: productData.color,
              price: parseFloat(productData.price).toFixed(2),
              img: imageUrl,
              collection_name: collectionName,
              material: productData.material,
            };
          });

          const items = await Promise.all(promises);
          const filteredItems = items.filter((item) => item !== null);

          allItems.push(...filteredItems);
        }

        const filteredItems = allItems.filter((item) => {
          const price = parseFloat(item.price);
          const typeFilter = filters.type ? filters.type[0] : null;
          const materialFilter = filters.material ? filters.material[0] : null;
          const colorFilter = filters.color ? filters.color[0] : null;
          const priceFilter = filters.price ? filters.price[0] : null;

          const typeMatch = !typeFilter || item.collection_name === typeFilter;
          const materialMatch =
            !materialFilter || item.material.includes(materialFilter);
          const colorMatch = !colorFilter || item.color.includes(colorFilter);
          const priceMatch =
            !priceFilter ||
            (priceFilter === "<$50" && price < 50) ||
            (priceFilter === "50-100" && price >= 50 && price <= 100) ||
            (priceFilter === "100-200" && price >= 100 && price <= 200) ||
            (priceFilter === "200-300" && price >= 200 && price <= 300) ||
            (priceFilter === ">$300" && price > 300);

          return typeMatch && materialMatch && colorMatch && priceMatch;
        });

        setItems(filteredItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items: ", error);
        setLoading(false);
      }
    };

    getItems();
  }, [filters]);

  useEffect(() => {
    console.log("Filtered Items:", items);
  }, [items]);

  if (loading) {
    return <div className="item_message">Loading...</div>;
  }

  if (items.length === 0) {
    return <div className="item_message">No items found</div>;
  }

  const handleAddToBagClick = (product) => {
    if (product) {
      const newItem = {
        id: product.id,
        quantity: 1,
        product_name: product.product_name,
        color: product.color,
        price: product.price,
        img: product.img,
        collection_name: product.collection_name,
        material: product.material,
      };

      db.collection("ShoppingBag")
        .doc(sessionID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const existingItems = doc.data().items || [];
            const updatedItems = [...existingItems, newItem];

            db.collection("ShoppingBag")
              .doc(sessionID)
              .set({ items: updatedItems })
              .then(() => {
                console.log("Item added to shopping bag in Firestore");
              });
          } else {
            db.collection("ShoppingBag")
              .doc(sessionID)
              .set({ items: [newItem] })
              .then(() => {
                console.log("New shopping bag created in Firestore");
              });
          }
        })
        .catch((error) => {
          console.error("Error accessing shopping bag:", error);
        });

      setShowBagOverlay(true);
      setTimeout(() => {
        setShowBagOverlay(false);
      }, 2000);
    }
  };

  function formatCurrency(input) {
    const amount = parseFloat(input);
    if (!isNaN(amount)) {
      const formattedAmount = amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
      });
      return `$${formattedAmount}`;
    } else {
      return input;
    }
  }

  return (
    <main className="items">
      {items.map((el) => (
        <div
          key={el.id}
          className="item"
          style={{
            backgroundImage: `url(${el.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="item_title">
            {el.collection_name}
            <span style={{ fontWeight: "700" }}> {el.product_name}</span>
          </p>
          <div className="i_box">
            <p className="item_price">{formatCurrency(el.price)}</p>
            <button
              className="item_basket"
              onClick={() => handleAddToBagClick(el)}
            ></button>
          </div>
        </div>
      ))}
      {showBagOverlay && (
        <div className="bag_overlay">
          <img src={arrow} alt='arrow'></img>
        </div>
      )}
    </main>
  );
}
