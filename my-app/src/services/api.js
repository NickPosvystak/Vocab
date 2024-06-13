import axios from "axios";

const wordsInstance = axios.create({
  baseURL: "https://65ccd3f8dd519126b83fa909.mockapi.io/",
});

// Get recommend words
export const fetchWords = async () => {
    const { data } = await wordsInstance.get("/words/");
    console.log('data-> re-words: ', data);
    return data
};

//Get all my saved words
export const fetchMyWords = async () => {
    const { data } = await wordsInstance.get("/save");
    console.log('data-> my-words: ', data);
    return data
};
