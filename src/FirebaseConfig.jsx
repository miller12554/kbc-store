// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEs0q3gtwXj81pAQGjzhGenR5f0Pe4Ylk",
  authDomain: "ads-network-3a0eb.firebaseapp.com",
  projectId: "ads-network-3a0eb",
  storageBucket: "ads-network-3a0eb.appspot.com",
  messagingSenderId: "980849294833",
  appId: "1:980849294833:web:37fe68cb58b44f1018d850"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
