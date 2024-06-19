// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBlN7X-FQbS2V6awK-ShXkwAawkVYGPzc",
  authDomain: "saaz-f18db.firebaseapp.com",
  projectId: "saaz-f18db",
  storageBucket: "saaz-f18db.appspot.com",
  messagingSenderId: "590931106376",
  appId: "1:590931106376:web:c9fafd673a2da69c1a167d",
  measurementId: "G-6T81T7H4QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);