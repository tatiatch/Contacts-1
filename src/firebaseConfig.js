import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBO3bY5Ew4Oqs4oOuZxEHGNyJ7MRo4_98o",
  authDomain: "tsu-contacts.firebaseapp.com",
  projectId: "tsu-contacts",
  storageBucket: "tsu-contacts.appspot.com",
  messagingSenderId: "844531409603",
  appId: "1:844531409603:web:8c79962c502b026c3fb876"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
