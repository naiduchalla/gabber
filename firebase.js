import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiYaOhxOTVcvcHZNCWteJkxnysXovan8Q",
  authDomain: "gabber-4baa7.firebaseapp.com",
  projectId: "gabber-4baa7",
  storageBucket: "gabber-4baa7.appspot.com",
  messagingSenderId: "706748086641",
  appId: "1:706748086641:web:bcae4f300384d85e9f5ed0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};

