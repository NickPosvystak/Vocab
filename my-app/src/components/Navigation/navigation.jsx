import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import User from "../User/User";
import Menu from "../Menu/Menu";
import sprite from "../../assets/svg/symbol-defs.svg";

const Navigation = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <header className="header">
      <div>

        <NavLink to="/" className="logo">
        {/* <img src={Logo} alt="VocabBuilder" className="log-img" /> */}
        <svg width="32" height="32">
          <use href={sprite + "#icon-logo"}></use>
        </svg>
        <p className="logo-title">VocabBuilder</p>
      </NavLink>
      </div>

      <div className="navigation-menu">
        <NavLink to="/" className="nav-title">
          Dictionary
        </NavLink>
       
        <NavLink to="/recommend" className="nav-title">
          Recommend
        </NavLink>
        <NavLink to="/training" className="nav-title">
          Training
        </NavLink>
       
      </div>
      <div className="bar-menu">

      <User />
      <Menu state={state} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};

export default Navigation;