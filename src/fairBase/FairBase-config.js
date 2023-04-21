// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvg0n51OqUHgRBFJDdUl8sbm4wCeHtf4g",
  authDomain: "authentication-emajhon-firebas.firebaseapp.com",
  projectId: "authentication-emajhon-firebas",
  storageBucket: "authentication-emajhon-firebas.appspot.com",
  messagingSenderId: "257506953066",
  appId: "1:257506953066:web:ac0fc4cf06d6d3414d0713"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;