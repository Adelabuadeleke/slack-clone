// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// import {initializeApp} from 'firebase/app'
// import { getFirestore} from 'firebase/firestore'
// import  'firebase/auth'
// require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDatI7NesxuAJ8BfBLpiVvqJgiGUHozWY4",
  authDomain: "slack-cone-3718d.firebaseapp.com",
  databaseURL: "https://slack-cone-3718d-default-rtdb.firebaseio.com",
  projectId: "slack-cone-3718d",
  storageBucket: "slack-cone-3718d.appspot.com",
  messagingSenderId: "1011445180488",
  appId: "1:1011445180488:web:19b991ba99a1296e38107d",
  measurementId: "G-DZ79CJD3TG"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
