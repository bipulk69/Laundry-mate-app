// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf1qWPTuMO_KXR9VS3tXsyd59CN7W9aCU",
  authDomain: "laundry-app-30e0e.firebaseapp.com",
  projectId: "laundry-app-30e0e",
  storageBucket: "laundry-app-30e0e.appspot.com",
  messagingSenderId: "1049307293957",
  appId: "1:1049307293957:web:90cbfb4731211863156f6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
