// Item.js
import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase";

export default function Item({ filters }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Current Filters:", filters);

    const getItems = async () => {
      try {
        if (!filters) return;

        const collections = {
          Sofa: "Sofa",
          Armchair: "Armchair",
          // Додати інші колекції за потреби
        };

        let allItems = [];

        for (const [key, collectionName] of Object.entries(collections)) {
          const snapshot = await db.collection(collectionName).get();

          const promises = snapshot.docs.map(async (doc) => {
            const productData = doc.data();
            if (!productData.price) {
              console.error(`Error: Price is undefined for document with ID ${doc.id}`);
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
          const materialMatch = !materialFilter || item.material.includes(materialFilter);
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
        setLoading(false); // Встановлюємо loading в false після завершення завантаження
      } catch (error) {
        console.error("Error fetching items: ", error);
        setLoading(false); // Встановлюємо loading в false в разі помилки
      }
    };

    getItems();
  }, [filters]);

  useEffect(() => {
    console.log("Filtered Items:", items);
  }, [items]);

  if (loading) {
    return <div className="item_message">Loading...</div>; // Повертаємо повідомлення про завантаження, якщо loading === true
  }

  if (items.length === 0) {
    return <div className="item_message">No items found</div>; // Повертаємо повідомлення, якщо немає знайдених товарів
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
            <p className="item_price">${el.price}</p>
            <button className="item_basket"></button>
          </div>
        </div>
      ))}
    </main>
  );
}
