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
    <li>
      <span>ID:{id}</span>
      <span>key:{id}</span>
      <span>word:{word}</span>
      <span>translation:{translation}</span>
      <span>description:{description}</span>
      <span>exampleSentence:{exampleSentence}</span>
      <span>progress:{progress}</span>
      <span>edit:{edit}</span>
    </li>
  );
};
export default WordListItem;
