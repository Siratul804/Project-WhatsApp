import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3q9z-Pybf9zx3S5LonRzTBxnP8LS9Q9c",
  authDomain: "whatsapp-clone-83ac8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-83ac8.firebaseio.com",
  projectId: "whatsapp-clone-83ac8",
  storageBucket: "whatsapp-clone-83ac8.appspot.com",
  messagingSenderId: "762443063836",
  appId: "1:762443063836:web:e2e7577d96cf60173275d9",
  measurementId: "G-X3TDYKG6TW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
