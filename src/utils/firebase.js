// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// import { getFireStore } from 'firebase/'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdWDya891fqsR1GY9_wJpN_Cmr85bJJ7o",
  authDomain: "new-store-b8a86.firebaseapp.com",
  projectId: "new-store-b8a86",
  storageBucket: "new-store-b8a86.appspot.com",
  messagingSenderId: "835639219762",
  appId: "1:835639219762:web:1e1648bd3ea4569783ce2b",
  measurementId: "G-H3DGM4PD2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()