import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  /* FIREBASE CONFIG */
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
