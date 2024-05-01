
import "./Home.styled.scss";
import sprite from "../../assets/svg/symbol-defs.svg";

const Home = () => {
  return (
    <section className="container">
      <label className="label">
        <div className="input-container">
          <input
            type="search"
            placeholder="Find the word"
            className="search-input"
          />
          <svg className="icon" width="20" height="20">
            <use href={sprite + "#icon-search"}></use>
          </svg>
        </div>
      </label>
      <label className="label">
        <div className="input-container">
          <input
            type="select"
            placeholder="Categories"
            className="search-input"
          />
          <svg className="icon" width="20" height="20">
            <use href={sprite + "#icon-toggle"}></use>
          </svg>
        </div>
      </label>
    </section>
  );
};
export default Home;
