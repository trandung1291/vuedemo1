import { firebase } from "firebase";
import "firebase/auth";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyA_7y2eyds3-RpOkkhI1gvZkE3gvvmKZP4",
  authDomain: "i-money-77625.firebaseapp.com",
  projectId: "i-money-77625",
  storageBucket: "i-money-77625.appspot.com",
  messagingSenderId: "465525011880",
  appId: "1:465525011880:web:77effa3217a27f447ed99d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FiedValue.serverTimestamp;

export { projectAuth, projectFirestore , timestamp };