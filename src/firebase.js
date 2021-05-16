import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";

const app = {
    apiKey: "AIzaSyAc_5poKCkYEJ0txE86yggkqIhfeoZwVf8",
    authDomain: "shopping-wishlist-cdd83.firebaseapp.com",
    databaseURL: "https://shopping-wishlist-cdd83-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "shopping-wishlist-cdd83",
    storageBucket: "shopping-wishlist-cdd83.appspot.com",
    messagingSenderId: "789719234405",
    appId: "1:789719234405:web:b27751ca8045782ccd138c",
    measurementId: "G-82FJ7LGYX7"
};

firebase.initializeApp(app);

export default firebase;