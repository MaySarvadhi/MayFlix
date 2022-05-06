// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBayo8_BldmgGFQthyaaAiP_dp7vCvwssk",
  authDomain: "mayflix-4bd73.firebaseapp.com",
  projectId: "mayflix-4bd73",
  storageBucket: "mayflix-4bd73.appspot.com",
  messagingSenderId: "706001993230",
  appId: "1:706001993230:web:7127105660d5714f58c65f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
