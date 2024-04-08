// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVyfxg2Zv9637-vGIiCvkk6TVskmY56to",
  authDomain: "netflixgpt-7597d.firebaseapp.com",
  projectId: "netflixgpt-7597d",
  storageBucket: "netflixgpt-7597d.appspot.com",
  messagingSenderId: "138439036781",
  appId: "1:138439036781:web:4c98b571d91ea429d51464",
  measurementId: "G-ZB54EM9KTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();