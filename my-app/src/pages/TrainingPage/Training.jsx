import React from "react";
import "./Training.styled.scss";
import report from "../../assets/images/report.png";
import { Report } from "notiflix/build/notiflix-report-aio";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import ModalAddWord from "../../components/ModalAddWord/ModalAddWord";

const Training = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();


  // const handleAddWord = () => {
    
  //   navigate("/dictionary");
  //   dispatch(ModalAddWord())
  // }


  const handleChange = () => {
  Report.success('Clicked on Add word', 'Function comes soon', 'Okay')
  };
  const handleDelete = () => {
    Report.failure("Clicked on Cancel", "Function comes soon", "Okay");
  };
  return (
    <div className="container-train">
      <div className="part-one">
        <h2 className="title-tr">
          You don't have a single word to learn right now.
        </h2>
        <p className="description-tr">
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </p>
        <div className="buttons-box">
          <button className="btn-tr" onClick={handleChange}>
            Add word
          </button>
          <button className="btn-tr-off" onClick={handleDelete}>Cancel</button>
        </div>
      </div>
      <img src={report} alt="report" className="image-tr" />
    </div>
  );
};

export default Training;
