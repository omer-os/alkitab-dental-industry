import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4NwvR2uYMAMGZk4t-IntEm5-ezLY1Zw4",
  authDomain: "twitterclone-b8036.firebaseapp.com",
  databaseURL: "https://twitterclone-b8036-default-rtdb.firebaseio.com",
  projectId: "twitterclone-b8036",
  storageBucket: "twitterclone-b8036.appspot.com",
  messagingSenderId: "13930404191",
  appId: "1:13930404191:web:2c4f7c6f88c939c8e1feea",
  measurementId: "G-0NHX1DCGV0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const SginInWithGoogle = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return console.log("user logged in");
    } else {
      const provider = new GoogleAuthProvider();
      const Sgn = signInWithPopup(auth, provider);
      return true;
    }
  });
};
export const SignOut = () => {
  signOut(auth);
};
