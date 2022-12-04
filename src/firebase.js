import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";
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
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const pledgeRef = collection(firestore, "pledge");
export const totalRef = collection(firestore, "total");
export const updateRef = doc(firestore, "total", "iAk4lNyEWAObxiJOlgtZ");
