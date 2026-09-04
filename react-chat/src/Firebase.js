import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOC_-8xUFOuzvDZGJZZCkKYphK7THax1g",
  authDomain: "my-chat-test001.firebaseapp.com",
  projectId: "my-chat-test001",
  storageBucket: "my-chat-test001.firebasestorage.app",
  messagingSenderId: "471487303873",
  appId: "1:471487303873:web:d109c452c15300f8acc440",
  measurementId: "G-2NY6VGZ846"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;