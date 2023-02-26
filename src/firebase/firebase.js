// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzSmTdm8RXKZ5f4C2H23fGmLrw4w0LXro",
  authDomain: "filmyverse-3f2a0.firebaseapp.com",
  projectId: "filmyverse-3f2a0",
  storageBucket: "filmyverse-3f2a0.appspot.com",
  messagingSenderId: "387019128784",
  appId: "1:387019128784:web:fc319435fac6c6d6bbc3d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
