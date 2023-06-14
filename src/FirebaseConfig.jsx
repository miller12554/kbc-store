// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7AucTzDNGhhO1bzF7rRrnSSmDmXHEPZg",
  authDomain: "new-wanted-today-store.firebaseapp.com",
  projectId: "new-wanted-today-store",
  storageBucket: "new-wanted-today-store.appspot.com",
  messagingSenderId: "710384170263",
  appId: "1:710384170263:web:3ce660d839f0602ad4f352"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

// export { auth, db, storage };
