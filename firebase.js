// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCva5ual6u7uI74EDFXCP3uP4_AkbFu1RE",
  authDomain: "joy-ambition-self-control-jas.firebaseapp.com",
  projectId: "joy-ambition-self-control-jas",
  storageBucket: "joy-ambition-self-control-jas.firebasestorage.app",
  messagingSenderId: "278700155958",
  appId: "1:278700155958:web:9131712eafeb0791a8a497",
  measurementId: "G-Q4F49RGQX2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
