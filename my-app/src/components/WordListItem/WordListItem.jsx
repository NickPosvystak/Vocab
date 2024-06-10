import React from "react";

const WordListItem = ({
  edit,
  progress,
  exampleSentence,
  description,
  translation,
  id,
  word,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{word}</td>
      <td>{translation}</td>
      {/* <td>{description}</td> */}
      <td>{exampleSentence}</td>
        </tr>
  );
};
export default WordListItem;
