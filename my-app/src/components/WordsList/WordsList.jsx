import React from "react";
import WordListItem from "../WordListItem/WordListItem";

const WordsList = ({ words }) => {
  const showWords = Array.isArray(words) && words.length;

  return (
    <div>
      <ul>
        {showWords &&
          words.map((word) => {
            return (
              <WordListItem
                id={word.id}
                word={word.word}
                translation={word.translation}
                description={word.description}
                exampleSentence={word.exampleSentence}
                progress={word.progress}
                edit={word.edit}
                key={word.id}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default WordsList;
