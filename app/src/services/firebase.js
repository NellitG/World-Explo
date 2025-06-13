import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrAUoomyXrjW0K7a9fndQyp_rn4WtsPgk",
  authDomain: "world-expo-ef19b.firebaseapp.com",
  projectId: "world-expo-ef19b",
  storageBucket: "world-expo-ef19b.firebasestorage.app",
  messagingSenderId: "845672894407",
  appId: "1:845672894407:web:ab428fb74aa06d701293e2",
  measurementId: "G-1WXCB989QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };