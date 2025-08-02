// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAz_7XAKEt3g3xcN3wZGpf6EnujrGZ7OA",
  authDomain: "netflix-gpt-3fcd3.firebaseapp.com",
  projectId: "netflix-gpt-3fcd3",
  storageBucket: "netflix-gpt-3fcd3.firebasestorage.app",
  messagingSenderId: "151212346218",
  appId: "1:151212346218:web:2f9e123db53e19f94c7313",
  measurementId: "G-S09DZFTFL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();