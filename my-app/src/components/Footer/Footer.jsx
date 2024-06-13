import React from "react";
import "./Footer.styled.scss";
import Logo from "../../assets/images/logo192.png";

const Footer = () => {
  return (
    <div className="logo-box">
      <img src={Logo} alt="logo" className="App-logo-spin" />
      <p className="logo-title-example">under development</p>
      <img src={Logo} alt="logo" className="App-logo-spin-1" />
    </div>
  );
};

export default Footer;
