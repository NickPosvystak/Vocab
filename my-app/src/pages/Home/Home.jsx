import * as React from "react";

import SelectInput from "../../components/Select/SelectInput";
import "./Home.styled.scss";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { fetchMyWords } from "../../services/api";
import { Confirm, Report } from "notiflix";
import { useMemo } from "react";
import TableTask from "../../components/TableTask/TableTask";

const Home = ({ searchValue, category, verbType }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const fetchUsersWords = async () => {
      try {
        const usersData = await fetchMyWords();
        console.log("usersData-> Home page", usersData);
        setWords(usersData);
      } catch (error) {
        console.log("error in fetchUsersWords: ", error);
      }
    };
    fetchUsersWords();
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
    <section className="home-container">
      <>
        <SelectInput />
        <TableTask
          data={filteredData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          searchValue={searchValue}
          category={category}
          verbType={verbType}
        />
      </>
      <>
        <Footer />
      </>
    </section>
  );
};
export default Home;
