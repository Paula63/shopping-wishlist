import firebase from '../firebase';

const db = firebase.firestore();

// shaping the data that is retrieved from firestore 
export function dataFromSnapshot(snapshot) {
    if(!snapshot.exists) return undefined;
    const data = snapshot.data();

    // transform data into a JS object
    for(const prop in data) {
        if(data.hasOwnProperty(prop)){
            if(data[prop] instanceof firebase.firestore.Timestamp) {
                data[prop] = data[prop].toDate();
            }
        }
    }

    return {
        ...data,
        id: snapshot.is
    }
}

export function listenToWishboardsFromFirestore() {
    return db.collection('wishboards');
}

export function listenToWishboardFromFirestore(wishboardId) {
    return db.collection('wishboards').doc(wishboardId);
}

export function addItemToWishboardInFirestore(wishboards){
    const wishboard = firebase.auth().currentUser;
    return db.collection('wishboards').add({
        ...wishboard,
        name: wishboard.name,
        items: firebase.firestore.FieldValue.arrayUnion({
            id: wishboard.items.uid,
            pathURL: wishboard.items.pathURL,
            displayName: wishboard.items.displayName,
            size: wishboard.items.size,
            price: wishboard.items.price,
            photoURL: wishboard.items.photoURL,
            description: wishboard.items.description
        })
    })
}