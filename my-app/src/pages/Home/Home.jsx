import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./Home.styled.scss";
import sprite from "../../assets/svg/symbol-defs.svg";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

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
          <FormControl
            className="input-category"
            sx={{
              borderRadius: "15px",
              fontSize: "16px",
            }}
            >
            <InputLabel
              sx={{
                
                fontWeight: "500",
                color: "#121417",
                fontSize: "16px",
                
              }}
              id="demo-select-small-label"
              >
              Category
            </InputLabel>
            <Select
              className="input-label"
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              label="Category"
              onChange={handleChange}
              sx={
                {
                  // textAlign: "start",
                  // padding: "12px 24px 12px 24px",
                }
              }
            >
              <MenuItem className="input-label" value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </label>
    </section>
  );
};
export default Home;
