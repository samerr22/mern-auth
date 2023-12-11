// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-85a42.firebaseapp.com",
  projectId: "mern-auth-85a42",
  storageBucket: "mern-auth-85a42.appspot.com",
  messagingSenderId: "7308263865",
  appId: "1:7308263865:web:8d4547b7bc989bf4def668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);