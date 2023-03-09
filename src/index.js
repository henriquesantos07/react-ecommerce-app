import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPJjzhK98cYBLoE6CoKV8_o0pATERZBpA",
  authDomain: "react-insider-store.firebaseapp.com",
  projectId: "react-insider-store",
  storageBucket: "react-insider-store.appspot.com",
  messagingSenderId: "277494233410",
  appId: "1:277494233410:web:f78b991574c71862fab0db"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


