import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Register">Register</NavLink>
      <NavLink to="Login">Login</NavLink>
    </>
  );
}
