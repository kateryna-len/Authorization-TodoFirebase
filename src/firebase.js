import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSk1HF3x_zhQ3c7VvuFGmX111O_E_OjM",
  authDomain: "todo-app-ae87a.firebaseapp.com",
  projectId: "todo-app-ae87a",
  storageBucket: "todo-app-ae87a.appspot.com",
  messagingSenderId: "683149545972",
  appId: "1:683149545972:web:0825cff667e2a49db5a9a1",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
