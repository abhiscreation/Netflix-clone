// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpJdZAxKp07AT2sPoC2TZFyZMUnj4Q6Mk",
  authDomain: "netflix-clone-ff29e.firebaseapp.com",
  projectId: "netflix-clone-ff29e",
  storageBucket: "netflix-clone-ff29e.appspot.com",
  messagingSenderId: "586185080585",
  appId: "1:586185080585:web:b7c572b85d378d1f499dd8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
