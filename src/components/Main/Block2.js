import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../img/saa1.png';
import img2 from '../../img/saa2.png';
import img3 from '../../img/saa3.png';
import { FiltersContext } from "../FiltersContext"; // Імпортуємо контекст фільтрів

export default function Block2() {
  const navigate = useNavigate();
  const { setFilters } = useContext(FiltersContext);

  const handleSeeMoreClick = () => {
    setFilters({ type: ['Sofa'] });
    navigate('/catalog');
    window.scrollTo(0, 0);
  };

  return (
    <div className="block2">
      <h2>Sofas and Armchairs</h2>
      <div className="box">
        <img src={img1} alt="Sofa" className="big_img" />
        
        <div className="box2">
          <img src={img2} alt="Sofa2" className="lil_img" />
          <p className="block_text">
            Our store offers a wide selection of armchairs and sofas known for
            their stylish design and high quality. Each piece is crafted using
            premium materials imported from Europe to ensure durability and
            comfort. You can choose from a variety of functional features that
            perfectly complement your interior.
          </p>
          <button className="see_more" onClick={handleSeeMoreClick}>See more</button>
        </div>
        
        <img src={img3} alt="Sofa3" className="big_img" />
      </div>
    </div>
  );
}
