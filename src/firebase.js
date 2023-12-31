// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";
import { getStorage , ref } from "firebase/storage";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8ridGF-iKQ_xqi_wxYUMhPbgCPCIcnXU",
  authDomain: "chatme-72af4.firebaseapp.com",
  projectId: "chatme-72af4",
  storageBucket: "chatme-72af4.appspot.com",
  messagingSenderId: "616668457659",
  appId: "1:616668457659:web:6b28b4decf39ef6d2f179e",
  measurementId: "G-RRR7CTZ0JX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage();
export const db = getFirestore()