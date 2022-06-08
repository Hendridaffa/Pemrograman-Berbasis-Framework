import firebase from 'firebase/compat/app';
// import "firebase/auth";
// import "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw6datezSE6NI7RdmVVa5WsuFrU4pXP8o",
    authDomain: "hendri-web-291104.firebaseapp.com",
    projectId: "hendri-web-291104",
    storageBucket: "hendri-web-291104.appspot.com",
    messagingSenderId: "496952274483",
    appId: "1:496952274483:web:f1ce51abac7ea3dec6bd46",
     measurementId: "G-FP0JC7YFPJ"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;