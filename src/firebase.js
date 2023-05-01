import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD77TFrEyo6GtG_clWRWWMfHwfMOAR0E1s",
  authDomain: "kyun-memo.firebaseapp.com",
  projectId: "kyun-memo",
  storageBucket: "kyun-memo.appspot.com",
  messagingSenderId: "1030358333000",
  appId: "1:1030358333000:web:3f264102001d9dcb84ca7d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
