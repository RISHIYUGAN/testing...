import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBlmIwR2nlrlbFCFqO5ur6fusrL6h6v7sQ",
    authDomain: "meme-generator-43d11.firebaseapp.com",
    databaseURL: "https://meme-generator-43d11.firebaseio.com",
    projectId: "meme-generator-43d11",
    storageBucket: "meme-generator-43d11.appspot.com",
    messagingSenderId: "12088582131",
    appId: "1:12088582131:web:834440828fc7003ec53c86",
    measurementId: "G-4KDLS1VVXQ"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()
  
  firebase.database().ref().set({
    name:"rishi"
  }
  );
  export {firebase,database as default}