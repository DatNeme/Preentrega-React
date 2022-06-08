// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDoqw25xF7839p2rQIyzjNJrS18q5HEg",
  authDomain: "fn-comicstore.firebaseapp.com",
  projectId: "fn-comicstore",
  storageBucket: "fn-comicstore.appspot.com",
  messagingSenderId: "289155887759",
  appId: "1:289155887759:web:506fbbef99f4d2ab6d76fa",
  measurementId: "G-29SXF1KPN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;