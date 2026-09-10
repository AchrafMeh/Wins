import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-IlJUAbKBzCsMsqsDnu4j2SaJGosR4Hs",
  authDomain: "windows-d031e.firebaseapp.com",
  // هذا السطر هو المهم والناقص لديك ربط قاعدة البيانات مباشرة:
  databaseURL: "https://windows-d031e-default-rtdb.firebaseio.com",
  projectId: "windows-d031e",
  storageBucket: "windows-d031e.firebasestorage.app",
  messagingSenderId: "874765961451",
  appId: "1:874765961451:web:87cb24b031c91744bf56ae",
  measurementId: "G-RN0DMCG727"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onValue, remove, update };
