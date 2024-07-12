import axios from "axios";
 const currenIp = '192.168.1.3';
export const makeRequest = axios.create({
  
  baseURL: `https://saaz-api.vercel.app/`, 
  withCredentials: false,
});
//https://saaz-client-api.onrender.com/
//http://localhost:5000/