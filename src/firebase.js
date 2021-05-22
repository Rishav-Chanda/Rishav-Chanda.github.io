import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBeHUaCmxmvctTNLYfolIhR6IyXFpJOu-E",
    authDomain: "rishav-chanda.firebaseapp.com",
    projectId: "rishav-chanda",
    storageBucket: "rishav-chanda.appspot.com",
    messagingSenderId: "1029178354393",
    appId: "1:1029178354393:web:bf828a155cab4570b32cc8",
    measurementId: "G-8D493QF252"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;