import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { NavLink } from "react-router-dom";
import "./Menu.styled.scss";
import User from "../User/User";
import sprite from "../../assets/svg/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthAuthenticated } from "../../redux/auth.selectors";
import Logout from "../Logout/Logout";
import { logOutThunk } from "../../redux/authReducer";

export default function AnchorTemporaryDrawer({ state, toggleDrawer }) {
  const authenticated = useSelector(selectAuthAuthenticated);

   const dispatch = useDispatch();
   const handleLogout = () => {
     dispatch(logOutThunk());
   };

  const list = (anchor) => (
    <Box
      className="menu-container"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="user-menu">
        <User />
        <svg className="menu-close" width="32" height="32">
          <use href={sprite + "#icon-close"}></use>
        </svg>
      </div>

      <div className="nav-menu">
        {authenticated ? (
          <>
            <NavLink to="/" className="nav-title">
              Dictionary
            </NavLink>
            <NavLink to="/recommend" className="nav-title">
              Recommend
            </NavLink>
            <NavLink to="/training" className="nav-title">
              Training
            </NavLink>
            <button onClick={handleLogout} className="btn-logout-menu">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/" className="nav-title">
              Dictionary
            </NavLink>
            <NavLink to="/register" className="nav-title">
              Register
            </NavLink>
            <NavLink to="/login" className="nav-title">
              Login
            </NavLink>
          </>
        )}
      </div>
      {/* <div className="image-box">
        <img
          src={Illustration}
          alt="Illustration"
          className="img-Illustration"
        />
      </div> */}
    </Box>
  );

  return (
    <div className="menu-mobile-right">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <svg
            className="menu-toggle"
            width="32"
            height="32"
            onClick={toggleDrawer(anchor, true)}
          >
            <use href={sprite + "#icon-menu"}></use>
          </svg>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
