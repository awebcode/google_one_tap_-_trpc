// Import the functions you need from the SDKs you need
// firebase.js
import  { getApps, initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm1RwUsrUrUFJR6iwfwqF88dr0BDZdYEE",
  authDomain: "whatsapp-clone-34f8a.firebaseapp.com",
  projectId: "whatsapp-clone-34f8a",
  storageBucket: "whatsapp-clone-34f8a.appspot.com",
  messagingSenderId: "368686253809",
  appId: "1:368686253809:web:c79b3e0632242d312e8b50",
  measurementId: "G-WL4K1C2CXS",
};

// Initialize Firebase
// Initialize Firebase
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const firebaseAuth =  getAuth(app);

