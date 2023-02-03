// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAROua24wo2YlUvyGZuLRNVbWNy6Wg9fvg",
  authDomain: "e-comerce-la-bolu-compra.firebaseapp.com",
  projectId: "e-comerce-la-bolu-compra",
  storageBucket: "e-comerce-la-bolu-compra.appspot.com",
  messagingSenderId: "558027249482",
  appId: "1:558027249482:web:59523626cb7f9928db13b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
