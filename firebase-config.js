import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSTOpQufYS2Ilrb7mMh-oSmMSE_HAwJFE",
  authDomain: "self-io-820e5.firebaseapp.com",
  projectId: "self-io-820e5",
  storageBucket: "self-io-820e5.firebasestorage.app",
  messagingSenderId: "68699759085",
  appId: "1:68699759085:web:573de83deeea7654b587e4",
  measurementId: "G-5TYYEV12BN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
