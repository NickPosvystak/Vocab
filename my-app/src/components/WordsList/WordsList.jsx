import React from "react";
import WordListItem from "../WordListItem/WordListItem";
import "./WordList.styled.scss"

const WordsList = ({ words }) => {
  const showWords = Array.isArray(words) && words.length;

  return (
    <div>
      <ul>
        {showWords &&
          words.map((word) => {
            return (
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Word</th>
                    <th>Translation</th>
                    {/* <th>Description</th> */}
                    <th>Example Sentence</th>
                      </tr>
                </thead>
                <tbody>
                  {words.map((wordItem) => (
                    <WordListItem key={wordItem.id} {...wordItem} />
                  ))}
                </tbody>
              </table>
            );
          })}
      </ul>
    </div>
  );
};

export default WordsList;
