import React from "react";
import { useSelector } from "react-redux";
import { selectAuthAuthenticated } from "../../redux/auth.selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({children, redirectTo = "/recommend"}) => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return authenticated ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
