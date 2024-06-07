import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});

export const setToken = (token) => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// --------------Register------------------------

export const requestRegister = async (formData) => {
  const { data } = await contactsInstance.post("/users/signup", formData);

  setToken(data.token);


  console.log("data from API requestRegister =>: ", data);
  return data;
};

// --------------Login------------------------

export const requestLogin = async (formData) => {
  const { data } = await contactsInstance.post("/users/login", formData);

  setToken(data.token);


  console.log("data from API requestLogin =>: ", data);
  return data;
};

// --------------Logout------------------------

export const requestLogout = async () => {
  const { data } = await contactsInstance.post("/users/logout");

  console.log("data from API requestLogout =>: ", data);
  return data;
};
// --------------Current------------------------

export const requestRefreshUser = async () => {
  const { data } = await contactsInstance.get("/users/current");

  console.log("data from API requestRefreshUser =>: ", data);
  return data;
};

export const getUsers = async (formData) => {
  const { data } = await contactsInstance.get("/contacts", formData);

  console.log("data=>user: ----------", data);
  return data;
};
