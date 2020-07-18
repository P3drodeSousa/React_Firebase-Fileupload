import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBl1L9mOYaBksar_5sYaI1P7F2v_keUzzc",
  authDomain: "fir-chat-4062f.firebaseapp.com",
  databaseURL: "https://fir-chat-4062f.firebaseio.com",
  projectId: "fir-chat-4062f",
  storageBucket: "fir-chat-4062f.appspot.com",
  messagingSenderId: "59300017379",
  appId: "1:59300017379:web:5c58d60959836b8efdc1d6",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
