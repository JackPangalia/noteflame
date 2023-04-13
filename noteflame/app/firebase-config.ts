// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD9sKY-I_B_fFAjH-ssh0qMhIzcVdfNZDQ",
  authDomain: "noteapp-cb304.firebaseapp.com",
  projectId: "noteapp-cb304",
  storageBucket: "noteapp-cb304.appspot.com",
  messagingSenderId: "798657744849",
  appId: "1:798657744849:web:3f95f611fb8cb164c45af0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()