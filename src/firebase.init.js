// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyib7MoFKZEme21udhv2QJ7BofvEqHzuY",
  authDomain: "genious-car-service-82cd1.firebaseapp.com",
  projectId: "genious-car-service-82cd1",
  storageBucket: "genious-car-service-82cd1.appspot.com",
  messagingSenderId: "493874917998",
  appId: "1:493874917998:web:c2b0b36de0d66a53856c7f",
  measurementId: "G-FMERD956GC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
