import * as React from "react";

import SelectInput from "../../components/Select/SelectInput";
import "./Home.styled.scss";
import Logo from "../../assets/images/logo192.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllWords } from "../../redux/operations";
import { selectWords } from "../../redux/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const { words } = useSelector(selectWords);


  useEffect(() => {
    dispatch(fetchAllWords());
    },[dispatch]);

    const filteredWords = Array.isArray(words) ? words : [];
    console.log('filteredWords: ', filteredWords);
  return (
    <section className="home-container">
      {filteredWords.length > 0 && (
        <ul>
          {filteredWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
      <SelectInput />
      {/* LOGO REACT */}
      <div className="logo-box">
        <img src={Logo} alt="logo" className="App-logo-spin" />
        <p className="logo-title-example">under development</p>
        <img src={Logo} alt="logo" className="App-logo-spin-1" />
      </div>
    </section>
  );
};
export default Home;
