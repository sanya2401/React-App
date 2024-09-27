// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyACVAKSc_SRUyqtsr2FuNCsG3SpACR0LJk",
    authDomain: "devdeakinlogin-79138.firebaseapp.com",
    projectId: "devdeakinlogin-79138",
    storageBucket: "devdeakinlogin-79138.appspot.com",
    messagingSenderId: "682014846879",
    appId: "1:682014846879:web:4c406096941829892a97aa",
    measurementId: "G-X0N6GBVFG3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
