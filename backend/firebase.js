import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fortuna-d3d82.firebaseapp.com",
  projectId: "fortuna-d3d82",
  storageBucket: "fortuna-d3d82.firebasestorage.app",
  messagingSenderId: "290324124070",
  appId: "1:290324124070:web:cff4e196350de41dcbff67",
  measurementId: "G-52CRCR59XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);