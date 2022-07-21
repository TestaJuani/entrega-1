// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6F5cEFzrRMjIrez2VJo2CmG25ejl0vPk",
  authDomain: "e-commerce-4aef7.firebaseapp.com",
  projectId: "e-commerce-4aef7",
  storageBucket: "e-commerce-4aef7.appspot.com",
  messagingSenderId: "275490857167",
  appId: "1:275490857167:web:7bbf8a7c328165cb9e17ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
