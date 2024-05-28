import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { db } from "./firebase.js";

export default function Bag({ onClose }) {
  const [cookies, setCookie] = useCookies(["sessionID"]);
  const sessionID = cookies.sessionID;

  const [items, setItems] = useState([]);
  const [isDocumentFound, setIsDocumentFound] = useState(true);

  useEffect(() => {
    if (sessionID) {
      db.collection("ShoppingBag")
        .doc(sessionID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setItems(data.items || []);
          } else {
            setIsDocumentFound(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching document:", error);
        });
    }
  }, [sessionID]);

  const handleEmptyBag = () => {
    setCookie("sessionID", "", { path: "/" });
    setItems([]);
    alert("Your shopping bag has been emptied.");
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    db.collection("ShoppingBag")
      .doc(sessionID)
      .set({ items: updatedItems })
      .then(() => {
        console.log("Item removed from shopping bag in Firestore");
      })
      .catch((error) => {
        console.error("Error updating shopping bag:", error);
      });
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      if (isNaN(price)) {
        return total;
      }
      return total + price * item.quantity;
    }, 0);
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
    <div className="overlay" onClick={onClose}>
      <div className="shop_bag" onClick={(e) => e.stopPropagation()}>
        <p className="bag_title">Shopping bag ({items.length})</p>
        {isDocumentFound ? (
          items.length > 0 ? (
            <div>
              {items.map((item, index) => (
                <div key={index} className="bag_item">
                  <img alt={item.name} src={item.img} className="bag_item_img" />
                  <div className="bag_item_info">
                    <p className="bag_item_title">
                      {item.collection_name}
                      <span style={{ fontWeight: "700" }}> {item.product_name}</span>
                    </p>
                    <p className="bag_item_text">Material: {item.material.join(", ")}</p>
                    <p className="bag_item_text">Color: {item.color}</p>
                    <p className="bag_item_text">Quantity: {item.quantity}</p>
                    <p className="bag_item_price">{formatCurrency(item.price)}</p>
                    <button className="remove_item_button" onClick={() => handleRemoveItem(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="subt_box">
                <p className="subt">Subtotal:</p>
                <p className="bag_item_price">{formatCurrency(calculateSubtotal())}</p>
              </div>
              <button className="checkout">Checkout</button>
              <button className="empty_bag_button" onClick={handleEmptyBag}>
                Empty the bag
              </button>
            </div>
          ) : (
            <div className="bag_title">Your shopping bag is empty.</div>
          )
        ) : (
          <div className="bag_title">Your shopping bag is empty.</div>
        )}
      </div>
    </div>
  );
}
