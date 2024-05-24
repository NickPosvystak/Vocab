import React, { useEffect, useState } from "react";
import "./RecommendPage.styled.scss";
import { fetchWords } from "../../sevices/api";
import WordsList from "../../components/WordsList/WordsList";
import SelectInput from "../../components/Select/SelectInput";

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
    <section className="r-section">
      <div className="title-recom">
        <WordsList words={words} />
      </div>
      <div>
        {/* <SelectInput /> */}
      </div>
    </section>
  );
};

export default RecommendPage;
