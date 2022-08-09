import React from "react";

import "../style/components/Navbar.css";

import Epicgameslogo from "../asset/image/Epic_logo.png";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div classname="image  container">
        <img className="logo" src={Epicgameslogo} />
      </div>
      <ul className="navbar_list">
        <li>STORE</li>
        <li>NEWS</li>
        <li>FAQ</li>
        <li>HELP</li>
        <li>UNREAL ENGINE</li>
        <div className="divider"></div>
        <li>ABOUT EPIC</li>
      </ul>
      <ul className="navbar_list2">
        <li>world icon</li>
        <li>username</li>
        <li>get epic games</li>
      </ul>
    </div>
  );
};

export default Navbar;
