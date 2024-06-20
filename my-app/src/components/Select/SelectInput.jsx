import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import "./SelectInput.styled.scss";

const SelectInput = () => {
  const [category, setCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [verbType, setVerbType] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value !== "Verb") {
      setVerbType("");
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleVerbTypeChange = (event) => {
    setVerbType(event.target.value);
  };

  return (
    <div>
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
                    borderColor: "rgb(133, 170, 159)",
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
                value={searchValue}
                onChange={handleSearchChange}
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
                onChange={handleCategoryChange}
                sx={{
                  borderRadius: "15px",
                }}
              >
                <MenuItem className="input-label" value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="Verb">Verb</MenuItem>
                <MenuItem value="Participle">Participle</MenuItem>
                <MenuItem value="Adjective">Adjective</MenuItem>
                <MenuItem value="Pronoun">Pronoun</MenuItem>
                <MenuItem value="Numerals">Numerals</MenuItem>
                <MenuItem value="Adverb">Adverb</MenuItem>
                <MenuItem value="Preposition">Preposition</MenuItem>
                <MenuItem value="Conjuction">Conjuction</MenuItem>
                <MenuItem value="Phrasal verb">Phrasal verb</MenuItem>
                <MenuItem value="Functional phrase">Functional phrase</MenuItem>
              </Select>
            </FormControl>
          </div>
        </label>

        {category === "Verb" && (
          <FormControl
            component="fieldset"
            sx={{
              "& .MuiFormGroup-root": { display: "flex", flexDirection: "row" },
            }}
          >
            <RadioGroup value={verbType} onChange={handleVerbTypeChange}>
              <FormControlLabel
                value="Regular"
                control={<Radio />}
                label="Regular"
              />
              <FormControlLabel
                value="Irregular"
                control={<Radio />}
                label="Irregular"
              />
            </RadioGroup>
          </FormControl>
        )}
      </div>
      <div>
        {/* <TableTask
          searchValue={searchValue}
          category={category}
          verbType={verbType}
        /> */}
      </div>
    </div>
  );
};

export default SelectInput;
