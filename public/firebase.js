/*global chrome*/
/*global importScripts*/
import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_FIREBASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_FIREBASE_MEASUREMENT_ID
// };

// firebase.initializeApp(firebaseConfig);

// console.log(firebase);

// chrome.runtime.onMessage.addListener((msg, sender, resp) => {

//     // pulling data from database and displaying it to the user
//     if(msg.command === "fetch") {
//         var domain = msg.dara.domain;
//         var enc_domain = btoa(domain);
//         firebase.database().ref('/domain'+enc_domain).once('value').then(function(snapshot){
//             resp({type: "result", status: "success", data: snapshot.val(), request: msg});
//         });
//     }

//     // submitting data to database
//     if(msg.command === "post") {
//         var domain = msg.data.domain;
//         var enc_domain = btoa(domain);
//         var discount = msg.data.discount;
//         var wishboard = msg.data.wishboard;
//         var url = msg.data.url;

//         // try{
//             var newItem = firebase.database().ref('/domain/'+enc_domain).push().set({
//                 discount: discount,
//                 wishboard: wishboard,
//                 url: url
//             });

//             var addId = newItem.key;
//             // eslint-disable-next-line no-undef
//             response({type: "result", staus: "success", data: addId, request: msg});
//         // }
//     }

// })

try{

    // import firebase scripts
    importScripts('firebase/firebase-app.js', 'firebase/firebase-database.js');

    // firebase configuration
    var firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_FIREBASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_FIREBASE_MESSAGE_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_FIREBASE_MEASUREMENT_ID
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.firestore();

    chrome.runtime.onMessage.addListener((msg, sender, resp) => {
        if(msg.command === "post") {
            db.collection("wishboards").doc("test-doc").set({
                data: msg.data
            })
            .then(function() {
                console.log("item saved");
            })
            .catch(function(error) {
                console.log("Error ocuured ", error);
            });
        }
        if(msg.command === "fetch") {
            var docRef = db.collection("wishboards").doc("Shoes");
            docRef.get().then(function(doc){
                if(doc.exists) {
                    resp({type: "result", status: "success", data: doc.data(), request: msg});
                } else {
                    resp({type: "result", status: "error", data: "item does not exist", request: msg});
                }
            }).catch(function(error) {
                resp({type: "result", status: "error", data: error, request: msg});
            });
        }
        return true;
    });
} catch(e) {
    console.log(e);
}