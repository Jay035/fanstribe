import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  // databaseURL: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: import.meta.env.VITE_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId,
  measurementId: import.meta.env.VITE_APP_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();
const provider = new GoogleAuthProvider();


export { app, auth, provider }