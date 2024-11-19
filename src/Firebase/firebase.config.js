// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEWdzhF15PQecOYza2Xlwnv_h66a35-3A",
  authDomain: "news-portal-b80e4.firebaseapp.com",
  projectId: "news-portal-b80e4",
  storageBucket: "news-portal-b80e4.firebasestorage.app",
  messagingSenderId: "952954625840",
  appId: "1:952954625840:web:437ce234a0a7c6315372f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;