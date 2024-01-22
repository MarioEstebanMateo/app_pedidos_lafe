import React from "react";

import "./Header.css";

import logo from "../img/logo-lafe.png";

const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="logoLaFe">
        <img src={logo} alt="logo La Fe" />
      </div>
    </div>
  );
};

export default Header;
