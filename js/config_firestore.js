const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCWa2U7gqczT0l5nagdUhdt_8KDJlI_jLc",
    authDomain: "practice-271311.firebaseapp.com",
    projectId: "1:559634213139:web:fd1d715f651ed90311d2e6"
  });
  
  var db = firebase.firestore();