import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAweLGqDB67PlulOCG1t90cBdSbXsd24o0",
  authDomain: "baraka-pledge.firebaseapp.com",
  projectId: "baraka-pledge",
  storageBucket: "baraka-pledge.appspot.com",
  messagingSenderId: "1097415304179",
  appId: "1:1097415304179:web:fdb26e81994ed508402886",
  measurementId: "G-XWQ4EKPPDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// const analytics = getAnalytics(app);
