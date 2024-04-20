import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB7dfb58FxYX39USJ_zQwg-1E2mPqcZgQU",
  authDomain: "cedre-6fcd2.firebaseapp.com",
  projectId: "cedre-6fcd2",
  storageBucket: "cedre-6fcd2.appspot.com",
  messagingSenderId: "763822582875",
  appId: "1:763822582875:web:5531f57909889929dde37e"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, googleAuthProvider };