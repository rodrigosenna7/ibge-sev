import firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAcoyj0VUVXX2sd3y5iTvNnFhw_JFaTKjU",
  authDomain: "ibge-sev.firebaseapp.com",
  projectId: "ibge-sev",
  storageBucket: "ibge-sev.appspot.com",
  messagingSenderId: "382372631349",
  appId: "1:382372631349:web:871d98737761acaef4b27c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  let storage = firebase.storage();
export const auth = firebase.auth();
export const dbfs = firebase.firestore();

  export default firebase;