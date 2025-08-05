// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvPYk6LJ0Qdi_9VbwjxNfz1TfjfSCS7pA",
  authDomain: "mynetflixproject-5b120.firebaseapp.com",
  projectId: "mynetflixproject-5b120",
  storageBucket: "mynetflixproject-5b120.firebasestorage.app",
  messagingSenderId: "457493818158",
  appId: "1:457493818158:web:39ba288a4ac8a722c368bf",
  measurementId: "G-7CW6MDNJLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();