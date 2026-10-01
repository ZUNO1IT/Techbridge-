```javascript
// TECHBRIDGE RWANDA
// Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIeekQOHDHt--r4KbPU8YOgueG3P1249g",
  authDomain: "techbrige-rwanda.firebaseapp.com",
  projectId: "techbrige-rwanda",
  storageBucket: "techbrige-rwanda.firebasestorage.app",
  messagingSenderId: "391783540774",
  appId: "1:391783540774:web:de825e268d4ed6b2711ee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);


// Export services
export {
    app,
    auth,
    db,

    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    updateProfile,

    doc,
    setDoc,
    getDoc,
    serverTimestamp
};
```
