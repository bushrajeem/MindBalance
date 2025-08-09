
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBFJ3Irwk6e-fmRrxcxSYuoQ5fEbjpwcRQ",
  authDomain: "mindbalance-9df36.firebaseapp.com",
  projectId: "mindbalance-9df36",
  storageBucket: "mindbalance-9df36.firebasestorage.app",
  messagingSenderId: "361237400824",
  appId: "1:361237400824:web:bd6c106d81bc5710803f0d",
  measurementId: "G-52T3TQ7SBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);


//Authentication
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();