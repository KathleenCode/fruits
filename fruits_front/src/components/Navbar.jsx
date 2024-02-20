import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
    <div className={Styles.nav}>
      <nav>
          <ul>
              <NavLink to="/" className={Styles.active} ><li>Home</li></NavLink>
              <NavLink to="/products "className={Styles.active}><li>Products</li></NavLink>
              <NavLink to="/services" className={Styles.active}><li>Services</li></NavLink>
              <NavLink to="/login" className={Styles.active}><li>Contact</li></NavLink>
          </ul>
      </nav>
    </div>
    </>
  )
}
