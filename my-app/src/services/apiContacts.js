import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://65ccd3f8dd519126b83fa909.mockapi.io",
});

export const setToken = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async (formData) => {

  const { data } = await contactsInstance.post("/users/register", formData);

  setToken(data.token);

  console.log('setToken: ==>', setToken);
  
  console.log("data from API requestRegister =>: ", data);
  return data;
};

export const requestLogin = async (formData) => {
  const { data } = await contactsInstance.post("/login", formData);

  setToken(data.token);

  console.log("setToken: ==>", setToken);

  console.log("data from API requestLogin =>: ", data);
  return data;
};


export const getUsers = async (formData) => {
  const { data } = await contactsInstance.get("/contacts", formData);
  
  console.log('data=>user: ----------', data);
  return data;
}