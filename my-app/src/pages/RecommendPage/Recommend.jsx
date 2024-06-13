import React, { useEffect, useMemo, useState } from "react";
import "./RecommendPage.styled.scss";
import SelectInput from "../../components/Select/SelectInput";
import Footer from "../../components/Footer/Footer";
import TableTask from "../../components/TableTask/TableTask";
import { fetchWords } from "../../services/api";
import { Confirm, Report } from "notiflix";

const RecommendPage = ({ searchValue, category, verbType }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchAllWords = async () => {
      try {
        const wordsData = await fetchWords();
        console.log("wordsData: ", wordsData);
        setWords(wordsData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAllWords();
  }, []);

  const handleEdit = (props) => {
    const wordValue = props.row.original.word;
    setSelectedValue(wordValue);
    Confirm.show(
      "Confirm",
      "Do you want to edit?",
      "Yes",
      "No",
      () => {
        Report.warning("Wait for update", "Come back soon", "Okay");
      },
      () => {
        Report.info("Wait for update", "Come back soon", "Okay");
      },
      {}
    );
    console.log("Click on edit", { wordValue });
  };
  const handleDelete = (value) => {
    Confirm.show(
      "Confirm",
      "Do you want to edit?",
      "Yes",
      "No",
      () => {
        Report.warning("Wait for update", "Come back soon", "Okay");
      },
      () => {
        Report.info("Wait for update", "Come back soon", "Okay");
      },
      {}
    );
    console.log("Click on Delete", { value });
  };
  const filteredData = useMemo(() => {
    return words.filter((item) => {
      const matchesSearch = (item.word || "") //Check
        .toLowerCase()
        .includes((searchValue || "").toLowerCase()); //Check

      const matchesCategory = category ? item.category === category : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchValue, category, words]);

  return (
    <section className="r-section">
      <SelectInput />
      <TableTask
        data={filteredData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        searchValue={searchValue}
        category={category}
        verbType={verbType}
      />
      <Footer />
    </section>
  );
};

export default RecommendPage;
