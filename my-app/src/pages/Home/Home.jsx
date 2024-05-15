import * as React from "react";

import SelectInput from "../../components/Select/SelectInput";
import "./Home.styled.scss";
import Logo from "../../assets/images/logo192.png";

const Home = () => {
  return (
    <section className="home-container">
      <SelectInput />
      <div className="logo-box">
        <img src={Logo} alt="logo" className="App-logo-spin" />
        <p className="logo-title">under development</p>
        <img src={Logo} alt="logo" className="App-logo-spin-1" />
      </div>
    </section>
  );
};
export default Home;
