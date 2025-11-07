// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
import { getFirestore, getDoc, doc, collection, } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js';

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

// Sign in message
console.log(auth.currentUser);
if (auth.currentUser !== null) {
    document.getElementById("test").innerHTML = "Signedg in as: " + user.email;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.uid;
        document.getElementById("test").innerText = "Signed in as: " + user.email;
        const docRef = doc(db, "users", uid);
        getDoc(docRef).then((docSnap) => {
            changeDone(docSnap.data().completed);
        
        });  
       
        // ...
    } else {
        // User is signed out
        // ...
    }
    });

function changeDone(array) {

    for (var i = 0; i < array.length; i++) {
        if (document.getElementById(array[i]) !== null) {
            document.getElementById(array[i]).className = "done";
            console.log(document.getElementById(array[i]));
        }
        
    }    

}