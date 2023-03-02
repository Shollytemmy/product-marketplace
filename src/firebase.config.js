// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk1pXipcqD-mWJ_97wcsUKZw1LEyy7d3w",
  authDomain: "product-marketplace-app.firebaseapp.com",
  projectId: "product-marketplace-app",
  storageBucket: "product-marketplace-app.appspot.com",
  messagingSenderId: "76107743813",
  appId: "1:76107743813:web:dcfc7ba7505e2bb70a992c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()

