import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://65ccd3f8dd519126b83fa909.mockapi.io/",
});

export const setToken = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {
  const { data } = await contactsInstance.post("user/signup", formData);
  setToken(data.token);
  
  console.log('data from API contacts =>: ', data);
  return data;
};
