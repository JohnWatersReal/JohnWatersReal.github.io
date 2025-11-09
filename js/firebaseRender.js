// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore, setDoc, doc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgpprjzCJEaepUQe-DAbKcNXGyKHLrDss",
  authDomain: "crossword-8f267.firebaseapp.com",
  projectId: "crossword-8f267",
  storageBucket: "crossword-8f267.firebasestorage.app",
  messagingSenderId: "499856655517",
  appId: "1:499856655517:web:79847c18ff99be2f560074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

document.addEventListener("finished", () => {
    var name = document.getElementsByClassName("cw-title").item(0).innerText;
    const updateRef = doc(db, "users", auth.currentUser.uid);
    updateDoc(updateRef, {
        completed: arrayUnion(name)
    });

});