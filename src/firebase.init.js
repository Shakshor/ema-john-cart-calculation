// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4mGN62Uej9vsPyxEI-BIzLaukCwXegSE",
    authDomain: "ema-john-simple-5e941.firebaseapp.com",
    projectId: "ema-john-simple-5e941",
    storageBucket: "ema-john-simple-5e941.appspot.com",
    messagingSenderId: "976094999437",
    appId: "1:976094999437:web:feb609512afe05976c43c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;