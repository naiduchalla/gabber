import firebase from "firebase";
import "firebase/auth";
const firebaseConfig = {
  //your api key config
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};

