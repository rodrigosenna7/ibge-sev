import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyB691QNmEyiYTIsT0xJs4zhkhpe0PCvjys",
  authDomain: "sev-facil.firebaseapp.com",
  projectId: "sev-facil",
  storageBucket: "sev-facil.appspot.com",
  messagingSenderId: "138718678936",
  appId: "1:138718678936:web:8090f0d318120bbdee25ed",
  measurementId: "G-4P04F9S2SY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  let storage = firebase.storage();
export const auth = firebase.auth();
export const dbfs = firebase.firestore();

  export default firebase;