// import firebase from "firebase/compat/app";
// import * as firebase from "firebase";

// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDcSastRh0lJRDJatNbZwPCq2rRqe9sr2U",
  authDomain: "signal-clone-69d34.firebaseapp.com",
  projectId: "signal-clone-69d34",
  storageBucket: "signal-clone-69d34.appspot.com",
  messagingSenderId: "423620310506",
  appId: "1:423620310506:web:90b58cf7d793ed1e94ee93",
};

let app = initializeApp(firebaseConfig);

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {});
const db = getFirestore(app);
// const db = getDatabase();

export { db, auth };
