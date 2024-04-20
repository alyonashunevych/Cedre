import React, { Component } from "react";
import { db, storage } from "../firebase.js";

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    const items = [];
    
    const categoriesSnapshot = await db.collection("ItemDB").get();
    
    categoriesSnapshot.forEach(async (doc) => {
      const categoryName = doc.id;
      const productsRef = db.collection("ItemDB").doc(categoryName).collection("Sofa");
      const productsSnapshot = await productsRef.get();
      
      productsSnapshot.forEach(async (doc) => {
        const productData = doc.data();
        
        if (productData && productData.img) {
          const imageUrl = await storage.ref().child(productData.img).getDownloadURL();
          
          const item = {
            product_name: productData.product_name,
            color: productData.color,
            price: productData.price,
            img: imageUrl,
          };
          
          items.push(item);
        }
      });
    });
    
    this.setState({ items });
  }
  
  
  

  render() {
    return (
      <main className="items">
        {this.state.items.map((el) => (
          <div
            className="item"
            style={{
              backgroundImage: `url(${el.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <p className="item_title">{el.product_name}</p>
            <div className="i_box">
              <p className="item_price">{el.price}</p>
              <button className="item_liked"></button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}

export default Item;
