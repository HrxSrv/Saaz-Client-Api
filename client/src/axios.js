import axios from "axios";
 const currenIp = '192.168.1.3';
export const makeRequest = axios.create({
  
  baseURL: `http://${currenIp}:5000/`, 
  withCredentials: true,
});
//https://saaz-client-api.onrender.com/
//http://localhost:5000/