import Firebase from 'firebase';
var config = {

    apiKey: "AIzaSyCi9Rme_TzP7UH5qjWmYolXP9Pvo-ixGuc",
   
    projectId: "fir-demo-8a194",

    authDomain: "fir-demo-8a194.firebaseapp.com", 

    databaseURL: "https://fir-demo-8a194.firebaseio.com", 

    storageBucket: "fir-demo-8a194.appspot.com",

    messagingSenderId: "913930738807",

};
let app = Firebase.initializeApp(config); 

export const db = app.database();

