import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCMiSTXuriwLwUwLq2X_oggj_AOP58thdU",
  authDomain: "test3-84723.firebaseapp.com",
  projectId: "test3-84723",
  storageBucket: "test3-84723.firebasestorage.app",
  messagingSenderId: "250463203730",
  appId: "1:250463203730:web:372f70a1340c1b31bdd14b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
