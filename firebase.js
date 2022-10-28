// // import firebase from "firebase/compat/app";
// import * as firebase from "firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDcSastRh0lJRDJatNbZwPCq2rRqe9sr2U",
//   authDomain: "signal-clone-69d34.firebaseapp.com",
//   projectId: "signal-clone-69d34",
//   storageBucket: "signal-clone-69d34.appspot.com",
//   messagingSenderId: "423620310506",
//   appId: "1:423620310506:web:90b58cf7d793ed1e94ee93",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBVwBndY67a2kojel12dO-0hZw7cBjQALs",
  authDomain: "signal-clone-8b73e.firebaseapp.com",
  projectId: "signal-clone-8b73e",
  storageBucket: "signal-clone-8b73e.appspot.com",
  messagingSenderId: "319537151687",
  appId: "1:319537151687:web:1ad506472d76f0401d08e2"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export {auth,db};
