import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./ModalAddWord.styled.scss";
import sprite from "../../assets/svg/symbol-defs.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalAddWord() {
  const [open, setOpen] = React.useState(false);
  const handleOpenAddWord = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpenAddWord} className="btn-add-word">
        Add word
        <svg className="add-word" width="20" height="20">
          <use href={sprite + "#icon-plus"}></use>
        </svg>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>


          <h3>Add word</h3>
          <p>
            Adding a new word to the dictionary is an important step in
            enriching the language base and expanding the vocabulary.
          </p>
          <div>
            <label htmlFor="">
              <input type="value" />
            </label>
          </div>
          <div>
            <label htmlFor="" className="text" placeholder="">
              <input
                type="text"
                name="ukarainian"
                id=""
                placeholder="Word on ukrainian"
              />
            </label>
            <label htmlFor="" className="text" placeholder="Word on english">
              <input
                type="text"
                name="english"
                id=""
                placeholder="Word on english"
              />
            </label>
            </div>
            <button type="button">Add</button>
            <button type="button">Cancel</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
