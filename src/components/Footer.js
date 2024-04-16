import { NavLink } from "react-router-dom";
import React from "react";
import inst from "../img/inst.svg"
import tg from "../img/tg.svg"
import behance from "../img/behance.svg"

export default function Footer() {
  return (
    <footer>
      <p className="footer_text">We will create the home of your dreams</p>
      <div className="foot_box">
        <span className="foot_logo">Cèdre</span>
        <div className='nav_box'>
            <div className='nav_box3'>
                <a href="mailto:ultradesign@gmail.com" className='footer_link'>ultradesign@gmail.com</a>
                <a href="tel:+38 (096) 875 49 57" className='tel'>+38 (096) 875 49 57</a>
                <a href="https://maps.app.goo.gl/7UNNHzttEpRxTgGJ8" className='footer_link'>Address: 37, Beresteyskyi Prospect, Kyiv</a>
                <div className='sites'>
                    <a href="https://www.instagram.com/alyona_shunevych/"><img src={inst} alt="inst"/></a>
                    <a href="https://t.me/alona_shunevych"><img src={tg} alt="tg"/></a>
                    <a href="https://www.behance.net/alyona_shunevych"><img src={behance} alt="behance"/></a>
                </div>
            </div>
            <div className='nav_box2'>
                <NavLink to="/catalog" className="footer_link">
                    Catalog
                </NavLink>
                <NavLink to="/delivery" className="footer_link">
                    Delivery
                </NavLink>
                <NavLink to="/news" className="footer_link">
                    News
                </NavLink>
                <NavLink to="/reviews" className="footer_link">
                    Reviews
                </NavLink>
                <NavLink to="/about us" className="footer_link">
                    About us
                </NavLink>
            </div>
            <div className='nav_box2'>
                <NavLink to="/sofas and armchairs" className="footer_link">
                    Sofas and Armchairs
                </NavLink>
                <NavLink to="/wardrobes" className="footer_link">
                    Wardrobes
                </NavLink>
                <NavLink to="/beds" className="footer_link">
                    Beds
                </NavLink>
                <NavLink to="/kitchens" className="footer_link">
                    Kitchens
                </NavLink>
                <NavLink to="/decor and accessories" className="footer_link">
                    Decor and accessories
                </NavLink>
            </div>
        </div>
        <div className='small_text_box'>
            <p className="foot_small_text">© 2010-2024 «Cèdre»</p>
            <p className="foot_small_text">Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
