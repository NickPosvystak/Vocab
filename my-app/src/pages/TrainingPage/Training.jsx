import React from "react";
import "./Training.styled.scss";
import report from "../../assets/images/report.png"

const Training = () => {
  return (
    <div className="container-train">
      <div>
        <h2>You don't have a single word to learn right now.</h2>
        <p>
          Please create or add a word to start the workout. We want to improve
          your vocabulary and develop your knowledge, so please share the words
          you are interested in adding to your study.
        </p>
      <button>Add word</button>
      <button>Cancel</button>
      </div>
      <img src={report} alt="image" />
    </div>
  );
};

export default Training;
