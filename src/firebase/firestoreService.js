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

export function getWishboardsFromFirestore(observer) {
    return db.collection('wishboards').onSnapshot(observer);
}
