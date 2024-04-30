// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsIku_zaR4_bbj8vshYYNaQfmctXjNbzs",
  authDomain: "afroblogging-15f7e.firebaseapp.com",
  projectId: "afroblogging-15f7e",
  storageBucket: "afroblogging-15f7e.appspot.com",
  messagingSenderId: "1000933324991",
  appId: "1:1000933324991:web:294682888142c05a7aae0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
