import * as React from "react";

import SelectInput from "../../components/Select/SelectInput";
import "./Home.styled.scss";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <section className="home-container">
      <SelectInput />

      <Footer />
    </section>
  );
};
export default Home;
