// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-gPyzxzR5NDPmYtZfGB5TeR_XTF6780",
  authDomain: "fn-comics-coder.firebaseapp.com",
  projectId: "fn-comics-coder",
  storageBucket: "fn-comics-coder.appspot.com",
  messagingSenderId: "364895993071",
  appId: "1:364895993071:web:145cde141d261d0cebef1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;