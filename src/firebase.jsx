import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCS36wRqoqL_sMiCh0Z9BCCsrb3dTNuSiM",
  authDomain: "airbus-clone-871e3.firebaseapp.com",
  projectId: "airbus-clone-871e3",
  storageBucket: "airbus-clone-871e3.appspot.com",
  messagingSenderId: "644401873838",
  appId: "1:644401873838:web:afc2b1e7eb34a0b3a0fe3f",
  measurementId: "G-2DB3RDK70R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
