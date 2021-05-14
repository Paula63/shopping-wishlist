import React, { useState, useEffect } from 'react';
import firebase from './../../firebase';
import * as RiIcons from 'react-icons/ri';
import { Button } from 'react-bootstrap';

export default function Wishboards() {

    const [wishboards, setWishboards] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("wishboards");

    function getWishboards() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setWishboards(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getWishboards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <p>Loading ..</p>
    }

    // delete board
    function deleteWishboard(wishboard) {
        ref
            .doc(wishboard.id)
            .delete()
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {wishboards.map((wishboard) => (
                <Button 
                    className="d-flex align-items-center justify-content-center mt-3 shadow" 
                    style={{ width: '34rem', height: '65px', borderRadius: '18px', fontSize: '18px', background: '#fff', color: '#000', borderColor: '#fff' }}
                >
                        <div className="flex flex-row" key={wishboard.id}>
                            <h3 style={{ fontSize: '22px' }}>{wishboard.title}</h3>
                        </div>
                        <div className="flex flex-row ml-4">
                            <RiIcons.RiDeleteBin2Line 
                                style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                                onClick={() => deleteWishboard(wishboard)} 
                            />
                        </div>
                </Button>
            ))}
      </>
    )
}

