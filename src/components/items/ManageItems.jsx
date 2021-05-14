import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { Button } from 'react-bootstrap';
import * as RiIcons from 'react-icons/ri';

export default function ManageItems() {

    const [savedItem, setSavedItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("items");

    function getItems() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setSavedItem(items);
            console.log(items)
            setLoading(false);
        });
    }

    useEffect(() => {
        getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function deleteItem(item) {
        ref.doc(item.id)
            .delete()
            .catch((err) => {
                console.log(err);
            });
    }

    if (loading) {
        return <p>Loading ..</p>
    }

    return (
        <>
            {savedItem.map((item) => (
                <Button 
                    className="d-flex align-items-center justify-content-center mt-3 shadow" 
                    style={{ width: '34rem', height: '65px', borderRadius: '18px', fontSize: '18px', background: '#fff', color: '#000', borderColor: '#fff' }}
                >
                        <div className="flex flex-row" key={item.id}>
                            <h3 style={{ fontSize: '22px' }}>{item.displayName}</h3>
                        </div>
                        <div className="flex flex-row ml-4">
                            <RiIcons.RiDeleteBin2Line 
                                style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                                onClick={() => deleteItem(item)} 
                            />
                        </div>
                </Button>
            ))}
      </>
    )
}
