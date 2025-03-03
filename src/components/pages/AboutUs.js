import React from "react";
import img1 from "../../img/aboutus.png";

export default function AboutUs() {
  window.scrollTo(0, 0);
  return (
    <div className="block7 content">
      <div className="au_block">
        <h2>About Us</h2>
        <div className="au_block2">
          <p className="block_text" style={{ width: "35.32vw" }}>
            Welcome to Cèdre, your ultimate destination for premium furniture
            online. At Cèdre, we believe that furniture should not only be
            functional but also a reflection of your style and personality. With
            years of experience in the industry, we curate a carefully selected
            collection of high-quality furniture pieces that are designed to
            enhance your living space. From luxurious sofas to elegant dining
            sets, each item in our collection is crafted with precision and
            attention to detail.
          </p>
          <p className="block_text" style={{ width: "35.32vw" }}>
            Our commitment to excellence extends beyond our products. We pride
            ourselves on providing exceptional customer service and a seamless
            shopping experience. Whether you're furnishing your home or office,
            our knowledgeable team is here to assist you every step of the way.
          </p>
          <p className="block_text" style={{ width: "35.32vw" }}>
            Thank you for choosing Cèdre. We look forward to helping you create
            the perfect ambiance in your space.
          </p>
          <div className="au_box">
            <div>
              <p className="au_fact">14 years</p>
              <p className="block_text" style={{ width: "11.67vw" }}>
                Innovative experience in the furniture industry
              </p>
            </div>
            <div>
              <p className="au_fact">36 000+</p>
              <p className="block_text" style={{ width: "11.67vw" }}>
                Satisfied customers who chose us for their interior
              </p>
            </div>
            <div>
              <p className="au_fact">12</p>
              <p className="block_text" style={{ width: "11.67vw" }}>
                Сountries from Europe cooperate with us
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={img1} alt="Team" className="big_img_au" />
    </div>
  );
}
