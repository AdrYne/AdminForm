import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB3q33e6rg6Uui2wmTMh2os3A6xARbxnf4",
    authDomain: "ondc-data.firebaseapp.com",
    projectId: "ondc-data",
    storageBucket: "ondc-data.appspot.com",
    messagingSenderId: "682111760207",
    appId: "1:682111760207:web:24cbc59e749327e2a5773a",
    measurementId: "G-SKMBGV3WLM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);