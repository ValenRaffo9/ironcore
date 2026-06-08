import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword, deleteUser } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, getDocs, deleteDoc, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5McPfrsZ0TAXWr-k1_gqOPgL7ySq1ZKc",
  authDomain: "ironcore-89919.firebaseapp.com",
  projectId: "ironcore-89919",
  storageBucket: "ironcore-89919.firebasestorage.app",
  messagingSenderId: "929208002533",
  appId: "1:929208002533:web:3a6754dd86702f9242310c"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export {
  auth, db,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged,
  EmailAuthProvider, reauthenticateWithCredential,
  updateEmail, updatePassword, deleteUser,
  doc, setDoc, getDoc, collection, addDoc, getDocs, deleteDoc, query, orderBy
};