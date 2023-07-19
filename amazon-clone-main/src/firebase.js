// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAon0FnHSLPD6Rdb0NEBZLKXF88NmSXVdY",
  authDomain: "clone-63ec3.firebaseapp.com",
  projectId: "clone-63ec3",
  storageBucket: "clone-63ec3.appspot.com",
  messagingSenderId: "325209524436",
  appId: "1:325209524436:web:f501d0a2961d689a891341",
  measurementId: "G-436WW6ZQZ3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
