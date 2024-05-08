// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7A-BN5Z69uwkl8NXbzaKmMtuESVs5szY",
  authDomain: "react-disney-plus-app-c2f63.firebaseapp.com",
  projectId: "react-disney-plus-app-c2f63",
  storageBucket: "react-disney-plus-app-c2f63.appspot.com",
  messagingSenderId: "547606013537",
  appId: "1:547606013537:web:17b9e3c6ed591009ce2c20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;