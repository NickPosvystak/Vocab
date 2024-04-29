import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";
import "./Menu.styled.scss";
import User from "../User/User";
import Close from "../../assets/images/x.svg";
import Illustration from "../../assets/images/illustration.png"

export default function AnchorTemporaryDrawer({ state, toggleDrawer }) {
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
        <img src={Close} alt="icon close" className="icon-close" />
      </div>

      <div className="nav-menu">
        <NavLink to="/" className="nav-title">
          Dictionary
        </NavLink>
        <NavLink to="/register" className="nav-title">
          Register
        </NavLink>
        <NavLink to="/login" className="nav-title">
          Login
        </NavLink>
      </div>
      <div className="Illustration">
        <img
          src={Illustration}
          alt="Illustration"
          className="img-Illustration"
        />
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
