// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLiLBQNIZnOrXgWV9JHiP-MJmIzx8WNEs",
  authDomain: "pokedex-92748.firebaseapp.com",
  projectId: "pokedex-92748",
  storageBucket: "pokedex-92748.appspot.com",
  messagingSenderId: "934478741899",
  appId: "1:934478741899:web:cc9961425b5e4852fb2f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);