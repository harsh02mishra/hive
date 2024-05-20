let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyAjrv_YDz4pIQeobhLrk-Txg72UWBXWlD4",
    authDomain: "blogging-website-5ba45.firebaseapp.com",
    projectId: "blogging-website-5ba45",
    storageBucket: "blogging-website-5ba45.appspot.com",
    messagingSenderId: "479897742319",
    appId: "1:479897742319:web:65b8a1682a568f3991a41a"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

let db = firebase.firestore();