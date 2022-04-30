// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyC6frJyP0kaAxVWhd1Rn0mBWS41Taqh4",
  authDomain: "grocery-service-5e808.firebaseapp.com",
  projectId: "grocery-service-5e808",
  storageBucket: "grocery-service-5e808.appspot.com",
  messagingSenderId: "506856203160",
  appId: "1:506856203160:web:a323fac9df9ac0cdcc81ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;