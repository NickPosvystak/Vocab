
import "./Home.styled.scss";
import sprite from "../../assets/svg/symbol-defs.svg";

const Home = () => {
  return (
    <section className="container">
      <label className="label">
        <input
          type="search"
          placeholder="Find the word"
          className="search-input"
        />
        <svg width="20" height="20">
          <use href={sprite + "#icon-search"}></use>
        </svg>
      </label>
      <label className="label">
        <input type="select" placeholder="Categories" />
        <svg  width="20" height="20">
          <use href={sprite + "#icon-toggle"}></use>
        </svg>
      </label>
    </section>
  );
};
export default Home;
