import { NavLink } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header">
        <span className="logo">Cèdre</span>

        <ul className="navigation">
          <li>
            <NavLink exact to="/" className="link" activeClassName="active">
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
          <button className="search"></button>
          <button className="account"></button>
          <button className="basket"></button>
        </ul>
      </div>
    </header>
  );
}
