import { initializeApp } from "firebase/app";
import { getFirestore }  from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxZgY1Pxngis1dnDpuw9owzywPj6_vgwc",
  authDomain: "react-proyecto-d2e55.firebaseapp.com",
  projectId: "react-proyecto-d2e55",
  storageBucket: "react-proyecto-d2e55.appspot.com",
  messagingSenderId: "665708356721",
  appId: "1:665708356721:web:60bb124a9fcc2c6924a7d0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)