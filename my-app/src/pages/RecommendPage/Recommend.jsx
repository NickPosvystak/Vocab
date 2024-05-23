import React, { useEffect, useState } from "react";
import "./RecommendPage.styled.scss";
import { fetchWords } from "../../sevices/api";
import WordsList from "../../components/WordsList/WordsList";

const RecommendPage = () => {
  const [words, setWords] = useState(null);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const wordsData = await fetchWords();
        setWords(wordsData);
      } catch (error) {
        console.log("error");
      }
    };
    fetchAllWords();
  }, []);
  return (
    <>
      <div className="title-recom">
        <WordsList words={words} />
      </div>
    </>
  );
};

export default RecommendPage;
