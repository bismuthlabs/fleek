// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzcE_MrQtBQ6fJSxVBch4dMzNHkRlvyzw",
  authDomain: "fleekytrends.firebaseapp.com",
  projectId: "fleekytrends",
  storageBucket: "fleekytrends.appspot.com",
  messagingSenderId: "891207460440",
  appId: "1:891207460440:web:04369f141e592f7f964c2d"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
export default app;