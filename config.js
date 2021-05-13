import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAn8dSM5-0SSeVP9L-YvHMiIAnsVeoZqnw",
    authDomain: "story-hub-af113.firebaseapp.com",
    projectId: "story-hub-af113",
    storageBucket: "story-hub-af113.appspot.com",
    messagingSenderId: "195793153896",
    appId: "1:195793153896:web:a4224c8dd3513a3795f0dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();