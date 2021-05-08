import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';

export default function ItemCard() {

    const [savedItem, setsavedItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("items");

    function getItems() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setsavedItem(items);
            console.log(items)
            setLoading(false);
        });
    }

    useEffect(() => {
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {savedItem.map((item) => (
                <div className="item text-center shadow" style={{ width: '240px', height: '420px', marginRight: '8px' }} key={item.id}>
                    <div className="cont cont-size">
                        <a href={item.location}>
                            <img src={item.photoURL} alt="item" className="item-img-top" />
                        </a>
                    </div>
                    <div className="item-title text-dark">
                        <p className="item-name" style={{ marginTop: '-40px' }}>{item.displayName}</p>
                        <p className="item-text text-secondary">Size: {item.size}</p>
                        <p className="item-text text-secondary">Price: {item.price}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
