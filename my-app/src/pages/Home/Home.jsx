import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import "./Home.styled.scss";
// import sprite from "../../assets/svg/symbol-defs.svg";
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
          <Box
            component="form"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                "&:hover fieldset": {
                  borderColor: "rgba(18, 20, 23, 0.1)",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                },
                "&.Mui-focused fieldset": {
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgb(133, 170, 159)", // border color on focus
                },
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Find the word"
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  fontWeight: "500",
                  fontSize: "16px",
                  color: "#121417",
                },
                width: "100%",
              }}
              InputProps={{
                endAdornment: (
                  <SearchIcon
                    sx={{ color: "action.active", cursor: "pointer" }}
                  />
                ),
              }}
            />
          </Box>
        </div>
      </label>
      {/* <label className="label">
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
      </label> */}
      <label className="label">
        <div className="input-container">
          <FormControl
            className="input-category"
            sx={{
              borderRadius: "15px",
              fontSize: "16px",
              "&:hover fieldset": {
                borderColor: "rgba(18, 20, 23, 0.1)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              },
              "&.Mui-focused fieldset": {
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                borderColor: "rgb(133, 170, 159)", // border color on focus
              },
              // padding: "12px 24px",
            }}
          >
            <InputLabel
              sx={{
                fontWeight: "500",
                color: "#121417",
                fontSize: "16px",
                borderColor: "red",
              }}
              id="demo-select-small-label"
            >
              Category
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              label="Category"
              onChange={handleChange}
              sx={{
                borderRadius: "15px",
                // textAlign: "start",
              }}
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
