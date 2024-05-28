import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Bag from "./Bag.js";

export default function Header() {
  const [showBagOverlay, setShowBagOverlay] = useState(false);

  const handleBagClick = () => {
    setShowBagOverlay(true);
  };

  const closeBagOverlay = () => {
    setShowBagOverlay(false);
  };
  return (
    <>
      <header>
        <div className="header">
          <span className="logo">Cèdre</span>

          <ul className="navigation">
            <li>
              <NavLink
                exact
                to="/Cedre"
                className="link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className="link" activeClassName="active">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="/delivery" className="link" activeClassName="active">
                Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="link" activeClassName="active">
                Contacts
              </NavLink>
            </li>
          </ul>

          <ul className="menu">
            <NavLink to="/Cedre">
              <button className="search"></button>
            </NavLink>
            <button className="account"></button>
            <button onClick={handleBagClick} className="basket"></button>
          </ul>
        </div>
      </header>
      {showBagOverlay && <Bag onClose={closeBagOverlay} />}
    </>
  );
}
