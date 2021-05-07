import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';

export default function ItemCard() {

    const [wishboardItem, setWishboardItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("wishboards").doc().collection('items');

    function getItems() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setWishboardItem(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {wishboardItem.map((items) => (
                <div className="item text-center shadow" style={{ width: '240px', height: '420px' }} key={items.id}>
                    {/* <div className="cont cont-size">
                        <a href={wishboard.items.pathURL}>
                            <img src={wishboard.items.photoURL} alt="item" className="item-img-top" />
                        </a>
                    </div> */}
                    <div className="item-title text-dark">
                        <p className="item-name" style={{ marginTop: '-40px' }}>{items.displayName}</p>
                        <p className="item-text text-secondary">Size: {items.size}</p>
                        <p className="item-text text-secondary">Price: {items.price}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
