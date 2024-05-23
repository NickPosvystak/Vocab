import axios from "axios";

const wordsInstance = axios.create({
  baseURL: "https://65ccd3f8dd519126b83fa909.mockapi.io/",
});

export const fetchWords = async () => {
    const { data } = await wordsInstance.get("/words/");
    console.log('data: ', data);
    return data
};
