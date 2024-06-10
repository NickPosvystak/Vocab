import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../redux/authReducer";

import "./Logout.styled.scss";
import { selectAuthAuthenticated } from "../../redux/auth.selectors";

const Logout = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
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
