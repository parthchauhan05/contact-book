var firebaseConfig = {
    apiKey: "AIzaSyDIWUe8YShTgBBdPqkDUbJ48qEt4fBe6E4",
    authDomain: "vue-contact-book-5683d.firebaseapp.com",
    databaseURL: "https://vue-contact-book-5683d.firebaseio.com",
    projectId: "vue-contact-book-5683d",
    storageBucket: "vue-contact-book-5683d.appspot.com",
    messagingSenderId: "642452035512",
    appId: "1:642452035512:web:3b0a22efe1e88e6a9ee14d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();