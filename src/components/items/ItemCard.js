import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

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

    function deleteItem(item) {
        ref.doc(item.id).delete()
            .catch((err) => {
                console.log("here", err);
            });
    }

    return (
        <>
            {savedItem.map((item) => (
                <div>
                    <div className="item text-center shadow" style={{ width: '240px', height: '290px', marginRight: '8px' }} key={item.id}>
                        <div className="cont cont-size" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a href={item.pathURL}>
                                <GiIcons.GiCardboardBox className="item-img-top" style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }} />
                            </a>
                        </div>
                        <div className="item-title text-dark">
                            <p className="item-name" style={{ wordWrap: 'break-word' }}>{item.displayName}</p>
                            {/* <p className="item-text text-secondary">Size: {item.size}</p>
                            <p className="item-text text-secondary">Price: {item.price}</p> */}
                            
                        </div>
                    </div>
                    <div style={{ marginTop: '-15px', marginLeft: '110px' }}>
                        <RiIcons.RiDeleteBin2Line 
                            style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                            onClick={() => deleteItem(item)} 
                        />
                    </div>
                </div>
            ))}
        </>
    )
}
