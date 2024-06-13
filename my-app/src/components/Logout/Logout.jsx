import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../redux/authReducer";

import "./Logout.styled.scss";
import { selectAuthAuthenticated } from "../../redux/auth.selectors";

const Logout = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk()).then(navigate("/"));
  };
  return (
    <>
      {authenticated && (
        <button onClick={handleLogout} className="btn-logout">
          LogOut
        </button>
      )}
    </>
  );
};

export default Logout;
