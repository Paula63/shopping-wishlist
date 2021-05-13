import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';
import * as AiIcon from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import Shopping from '../../images/shopping.svg';

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

    if (loading) {
        return <p>Loading ..</p>
    }

    return (
        <>
            {savedItem.map((item) => (
                <div className="item text-center shadow" style={{ width: '240px', height: '380px', marginRight: '8px' }} key={item.id}>
                    <div className="cont cont-size" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href={item.pathURL}>
                            <FiIcons.FiAperture className="item-img-top" />
                            {/* <img src={Shopping} alt="item" className="item-img-top" style={{ }} /> */}
                        </a>
                    </div>
                    <div className="item-title text-dark">
                        <p className="item-name" style={{ wordWrap: 'break-word' }}>{item.displayName}</p>
                        {/* <p className="item-text text-secondary">Size: {item.size}</p>
                        <p className="item-text text-secondary">Price: {item.price}</p> */}
                        <div style={{ marginTop: '-15px', marginLeft: '180px' }}>
                            <AiIcon.AiOutlineClose style={{ width: '25px', height: '25px' }} />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
