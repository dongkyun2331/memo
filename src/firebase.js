import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAS113FZlhV4v6pZmpG6mD03wbSLmT7rW8",
  authDomain: "kyun-memo-app.firebaseapp.com",
  projectId: "kyun-memo-app",
  storageBucket: "kyun-memo-app.appspot.com",
  messagingSenderId: "725293422462",
  appId: "1:725293422462:web:bac2a0845390204aa0c52f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
