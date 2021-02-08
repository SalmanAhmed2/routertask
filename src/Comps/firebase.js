import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBXqqjvy1y0CC50lXhyQgzm3M96Mu6xLZc",
    authDomain: "fir-project-828b0.firebaseapp.com",
    projectId: "fir-project-828b0",
    storageBucket: "fir-project-828b0.appspot.com",
    messagingSenderId: "246063087799",
    appId: "1:246063087799:web:f920fe35f3426d24330d32",
    measurementId: "G-K3P2X4B9HM"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);