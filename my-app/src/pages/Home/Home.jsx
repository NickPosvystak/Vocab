import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import "./Home.styled.scss";
import { useState } from "react";
import Table from "../../components/Task/Table";

const Home = () => {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <section className="container">
      <div className="container-select">
        <label className="label">
          <div className="input-container">
            <Box
              component="form"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  "&:hover fieldset": {
                    borderColor: "rgb(133, 170, 159)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  },
                  "&.Mui-focused fieldset": {
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                    borderColor: "rgb(133, 170, 159)", // border color on focus
                  },
                  "&.MuiInputBase fieldset": {
                    border: "none",
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
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "rgb(133, 170, 159)",
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

        <label className="label">
          <div className="input-container">
            <FormControl
              className="input-category"
              sx={{
                borderRadius: "15px",
                fontSize: "16px",
                "& .MuiOutlinedInput-root": {
                  borderColor: "rgb(133, 170, 159)",
                  "&:hover fieldset": {
                    borderColor: "rgb(133, 170, 159)",
                    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(133, 170, 159)",
                  },
                },
              }}
            >
              <InputLabel
                sx={{
                  fontWeight: "500",
                  color: "#121417",
                  fontSize: "16px",
                  "&.Mui-focused": {
                    color: "rgb(133, 170, 159)",
                  },
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
                }}
              >
                <MenuItem className="input-label" value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Verb</MenuItem>
                <MenuItem value={20}>Participle</MenuItem>
                <MenuItem value={40}>Adjective</MenuItem>
                <MenuItem value={50}>Pronoun</MenuItem>
                <MenuItem value={60}>Numerals</MenuItem>
                <MenuItem value={70}>Adverb</MenuItem>
                <MenuItem value={80}>Preposition</MenuItem>
                <MenuItem value={90}>Conjuction</MenuItem>
                <MenuItem value={95}>Phrasal verb</MenuItem>
                <MenuItem value={96}>Phrasal verb</MenuItem>
              </Select>
            </FormControl>
          </div>
        </label>
      </div>
      <div className="container-table">
        <Table />
      </div>
    </section>
  );
};
export default Home;
