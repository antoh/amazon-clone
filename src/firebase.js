// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZnwDzBzF3r_q5ZW2YA2uKdUwT56TEvlg",
  authDomain: "clone-c35e9.firebaseapp.com",
  databaseURL: "https://clone-c35e9.firebaseio.com",
  projectId: "clone-c35e9",
  storageBucket: "clone-c35e9.appspot.com",
  messagingSenderId: "936994642827",
  appId: "1:936994642827:web:996efeb89fab7bcd586d8e",
  measurementId: "G-E1GL4DX7PD",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
