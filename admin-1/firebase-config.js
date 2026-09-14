import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, set, update, onValue, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-IlJUAbKBzCsMsqsDnu4j2SaJGosR4Hs",
  authDomain: "windows-d031e.firebaseapp.com",
  databaseURL: "https://windows-d031e-default-rtdb.firebaseio.com/",
  projectId: "windows-d031e",
const db = getDatabase(app);
const auth = getAuth(app);

export { db, ref, push, set, update, onValue, remove, auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };
