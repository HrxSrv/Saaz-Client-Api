import axios from "axios";
export const makeRequest = axios.create({
  baseURL: "http://localhost:5000/", 
  withCredentials: true,
});
//https://saaz-client-api.onrender.com/
//http://localhost:5000/