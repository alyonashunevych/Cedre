import React from "react";
import img1 from "../../img/dec1.png";
import img2 from "../../img/dec2.png";
import img3 from "../../img/dec3.png";

export default function Block6() {
  return (
    <div className="block6">
      <h2>Decor and accessories</h2>
      <div className="box">
        <img src={img1} alt="Decor" className="big_img" />
        <img src={img2} alt="Decor2" className="big_img" />

        <div className="box2">
          <img src={img3} alt="Decor3" className="lil_img"></img>
          <p className="block_text">
            Add the finishing touch to your interior with our decorative
            elements and accessories. Choose from our diverse range of decor
            items that match your style and add a touch of luxury <br/>
            to your home.
            All our decorative elements are made from high-quality materials to
            ensure the durability of your interior.
          </p>
          <button className="see_more">Search</button>
        </div>
      </div>
    </div>
  );
}
