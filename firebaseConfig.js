// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore  } = require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3yZH-mN7OMt0PcB7OBQgmh53e0aEuigE",
  authDomain: "rest-serviciosweb.firebaseapp.com",
  projectId: "rest-serviciosweb",
  storageBucket: "rest-serviciosweb.appspot.com",
  messagingSenderId: "1095531299070",
  appId: "1:1095531299070:web:99082b80e10e7d5d6c25af",
  measurementId: "G-VF5ETTS14C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
