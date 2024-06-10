import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";
import User from "../User/User";
import Menu from "../Menu/Menu";
import sprite from "../../assets/svg/symbol-defs.svg";
import { useSelector } from "react-redux";
import { selectAuthAuthenticated } from "../../redux/auth.selectors";
import Logout from "../Logout/Logout";

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const [isSticky, setIsSticky] = useState(false);

  const [state, setState] = useState({
    right: false,
  });

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 100) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
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
    <header className={isSticky ? "header sticky" : "header"}>
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
        {authenticated ? (
          <>
            <NavLink to="/recommend" className="nav-title">
              Recommend
            </NavLink>
            <NavLink to="/training" className="nav-title">
              Training
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-title">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-title">
              Register
            </NavLink>
          </>
        )}
      </div>
      <div className="bar-menu">
        <User />
       {authenticated && <Logout />}
        <Menu state={state} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};

export default Navigation;
