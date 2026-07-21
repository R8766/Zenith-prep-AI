import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDImkyUtZODX1rdBlCJavVcMeyrpsKHvl8",
  authDomain: "zenith-46d82.firebaseapp.com",
  projectId: "zenith-46d82",
  storageBucket: "zenith-46d82.firebasestorage.app",
  messagingSenderId: "426712655121",
  appId: "1:426712655121:web:abd1816c6bd6ea1b3218b0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();