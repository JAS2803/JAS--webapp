import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-storage.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBEah1GSoyYGY7v18tuUNOwm7yFo7SppDE",
  authDomain: "jas-89e85.firebaseapp.com",
  projectId: "jas-89e85",
  storageBucket: "jas-89e85.firebasestorage.app",
  messagingSenderId: "983859139258",
  appId: "1:983859139258:web:0f93e35a09960688b5a883",
  measurementId: "G-YEM9HVY119"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
