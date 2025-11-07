// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js';
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js';

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

console.log(auth.currentUser);
if (auth.currentUser !== null) {
    document.getElementById("test").innerHTML = "Signed in as: " + user.email;
}

// Get form data
const signUp = document.querySelector("#signUp");

// Create account when button pushed
signUp.addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(signUp);
    const email = formData.get("sUEmail");
    const password = formData.get("sUPassword");
    if (!validCheck(email, password)) {
        return;
    }  

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user.uid);
            setDoc(doc(db, "users", userCredential.user.uid), {
                id: userCredential.user.uid,
                completed: ["Fare's Fair"]
            });
            alert("Created account successfully!");
        })
        .catch((error) => {
        alert("Failed with error code: " + error.code + "\n" + error.message);
    });  
});

// Get signIn form
const signIn = document.querySelector("#signIn");

// Attempt to sign in
signIn.addEventListener('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(signIn);
    const email = formData.get("sIEmail");
    const password = formData.get("sIPassword");
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        alert("Signed in successfully!");
        })
        .catch((error) => {
        alert("Failed with error code: " + error.code + "\n" + error.message);
    });  
});

// Check client side if the email and password are valid
function validCheck(email, password) {

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    } else if (!email || !password) {
        alert("Missing an email");
        return false;
    } else if (!email.includes("@")) {
        alert("Email invalid");
        return false;
    } else {
        return true;
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("changed");
        document.getElementById("test").innerHTML = "Signed in as: " + user.email;
        // ...
    } else {
        // User is signed out
        // ...
    }
    });
