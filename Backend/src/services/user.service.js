const axios = require("axios");

require("dotenv").config();

const api = axios.create({
  baseURL: "https://spaces.nexudus.com/api",
  auth: {
    username: process.env.NEXUDUS_USER,
    password: process.env.NEXUDUS_PASSWORD,
  },
});

const getUsers = async () => {
  const response = await api.get("/sys/users?page=1&size=20&orderBy=FullName&dir=0");

  return response.data;
};

const getCoworkers = async () => {
  const response = await api.get("/spaces/coworkers");

  return response.data;
};

const getCoworkersByFullName = async (fullName) => {
  const response = await api.get("/spaces/coworkers?Coworker_FullName="+fullName+"&orderBy=FullName");

  return response.data;
};

module.exports = {
  getUsers,
  getCoworkers,
  getCoworkersByFullName
};
