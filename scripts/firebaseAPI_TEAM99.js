//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDBs-7PjLhjIP6zOW3ebVZkGj7-ePbA2Ho",
    authDomain: "comp1800-202410-demo-d4269.firebaseapp.com",
    projectId: "comp1800-202410-demo-d4269",
    storageBucket: "comp1800-202410-demo-d4269.appspot.com",
    messagingSenderId: "216496409645",
    appId: "1:216496409645:web:986ad00641457b50ecfca4"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
