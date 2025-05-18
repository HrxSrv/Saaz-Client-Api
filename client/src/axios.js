import axios from "axios";
 const currenIp = '192.168.1.3';
export const makeRequest = axios.create({
  baseURL: `http://localhost:5000/`, 
  withCredentials: false,
});
//https://saaz-client-api.onrender.com/
//http://localhost:5000/