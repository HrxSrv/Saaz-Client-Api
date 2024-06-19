import axios from "axios";
export const makeRequest = axios.create({
  baseURL: "https://saaz-client-api.onrender.com/",
  withCredentials: true,
});