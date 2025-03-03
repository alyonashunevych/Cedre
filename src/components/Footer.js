import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import inst from "../img/inst.svg";
import tg from "../img/tg.svg";
import behance from "../img/behance.svg";
import { FiltersContext } from "./FiltersContext";

export default function Footer() {
  const navigate = useNavigate();
  const { setFilters } = useContext(FiltersContext);

  const handleSofaClick = () => {
    setFilters({ type: ["Sofa"] });
    navigate("/catalog");
    window.scrollTo(0, 0);
  };

  const handleArmchairClick = () => {
    setFilters({ type: ["Armchair"] });
    navigate("/catalog");
    window.scrollTo(0, 0);
  };

  const handleWardrobeClick = () => {
    setFilters({ type: ["Wardrobe"] });
    navigate("/catalog");
    window.scrollTo(0, 0);
  };

  const handleBedClick = () => {
    setFilters({ type: ["Bed"] });
    navigate("/catalog");
    window.scrollTo(0, 0);
  };

  return (
    <footer id="footer">
      <p className="footer_text">We will create the home of your dreams</p>
      <div className="foot_box">
        <span className="foot_logo">Cèdre</span>
        <div className="nav_box">
          <div className="nav_box3">
            <a href="mailto:ultradesign@gmail.com" className="footer_link">
              ultradesign@gmail.com
            </a>
            <a href="tel:+38 (096) 875 49 57" className="tel">
              +38 (096) 875 49 57
            </a>
            <a
              href="https://maps.app.goo.gl/7UNNHzttEpRxTgGJ8"
              className="footer_link"
            >
              Address: 37, Beresteyskyi Prospect, Kyiv
            </a>
            <div className="sites">
              <a href="https://www.instagram.com/alyona_shunevych/">
                <img src={inst} style={{ height: "1.5vw" }} alt="inst" />
              </a>
              <a href="https://t.me/alona_shunevych">
                <img src={tg} style={{ height: "1.5vw" }} alt="tg" />
              </a>
              <a href="https://www.behance.net/alyona_shunevych">
                <img src={behance} style={{ height: "1.5vw" }} alt="behance" />
              </a>
            </div>
          </div>
          <div className="nav_box2">
            <NavLink to="/catalog" className="footer_link">
              Catalog
            </NavLink>
            <NavLink to="/delivery" className="footer_link">
              Delivery
            </NavLink>
            <NavLink to="/about-us" className="footer_link">
              About us
            </NavLink>
            <NavLink to="/news" className="footer_link">
              News
            </NavLink>
            <NavLink to="/reviews" className="footer_link">
              Reviews
            </NavLink>
          </div>
          <div className="nav_box2">
            <div onClick={handleSofaClick} className="footer_link">
              Sofas
            </div>
            <div onClick={handleArmchairClick} className="footer_link">
              Armchairs
            </div>
            <div onClick={handleWardrobeClick} className="footer_link">
              Wardrobes
            </div>
            <div onClick={handleBedClick} className="footer_link">
              Beds
            </div>
            <NavLink to="/kitchens" className="footer_link">
              Kitchens
            </NavLink>
            <NavLink to="/decor and accessories" className="footer_link">
              Decor and accessories
            </NavLink>
          </div>
        </div>
        <div className="small_text_box">
          <p className="foot_small_text">© 2010-2024 «Cèdre»</p>
          <p className="foot_small_text">Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
