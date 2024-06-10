import React, { useEffect, useState } from "react";
import "./RecommendPage.styled.scss";
import { fetchWords } from "../../services/api";
import WordsList from "../../components/WordsList/WordsList";

const RecommendPage = () => {
  const [words, setWords] = useState(null);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const wordsData = await fetchWords();
        console.log('wordsData: ', wordsData);
        setWords(wordsData);
        
      } catch (error) {
        console.log("error");
      }
    };
    fetchAllWords();
  }, []);
  return (
    <section className="r-section">
      <div className="title-recom">
        <WordsList words={words} />
      </div>
    </section>
  );
};

export default RecommendPage;
