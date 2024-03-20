import React from "react";
import img1 from "../../img/kit1.png";
import img2 from "../../img/kit2.png";
import img3 from "../../img/kit3.png";

export default function Block5() {
  return (
    <div className="block5">
      <h2>Kitchens</h2>
      <div className="box">
        <img src={img1} alt="Kitchen" className="big_img" />

        <div className="box2">
          <img src={img2} alt="Kitchen2" className="lil_img"></img>
          <p className="block_text">
            Step into a world of culinary elegance with our meticulously crafted
            kitchens. We offer a range of designs tailored to meet your needs,
            all constructed from premium materials sourced for their durability
            and aesthetic appeal. Explore our collection and find the perfect
            kitchen to transform your home.
          </p>
          <button className="see_more">Search</button>
        </div>

        <img src={img3} alt="Kitchen3" className="big_img" />
      </div>
    </div>
  );
}
