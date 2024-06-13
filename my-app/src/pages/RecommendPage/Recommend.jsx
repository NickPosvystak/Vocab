import React from "react";
import "./RecommendPage.styled.scss";
import SelectInput from "../../components/Select/SelectInput";
import Footer from "../../components/Footer/Footer";

const RecommendPage = () => {
  return (
    <section className="r-section">
      <SelectInput />
      <Footer />
    </section>
  );
};

export default RecommendPage;
