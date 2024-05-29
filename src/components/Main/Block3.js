import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/ward1.png";
import img2 from "../../img/ward2.png";
import img3 from "../../img/ward3.png";
import { FiltersContext } from "../FiltersContext"; 

export default function Block3() {
  const navigate = useNavigate();
  const { setFilters } = useContext(FiltersContext);

  const handleSeeMoreClick = () => {
    setFilters({ type: ['Wardrobe'] });
    navigate('/catalog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="block3">
      <h2>Wardrobes</h2>
      <div className="box">
        <img src={img1} alt="Wardrobe" className="big_img" />
        <img src={img2} alt="Wardrobe2" className="big_img" />

        <div className="box2">
          <img src={img3} alt="Wardrobe3" className="lil_img"></img>
          <p className="block_text">
            Range of our wardrobes impresses with its elegance and quality. Each
            wardrobe is crafted with attention to detail, using only the finest
            materials. We offer wardrobes in various configurations and styles
            to help you organize your space efficiently while adding charm and
            style to your interior.
          </p>
          <button className="see_more" onClick={handleSeeMoreClick}>Search</button>
        </div>
      </div>
    </div>
  );
}
