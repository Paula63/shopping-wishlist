import React, { useEffect, useState } from 'react';
import firebase from './../../firebase';
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
        return <h1>Loading ..</h1>
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

    //edit wishboard
    function editWishboard(updatedWishboard) {
        ref
            .doc(updatedWishboard.id)
            .update(updatedWishboard)
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
                        <div key={wishboard.id}>
                            <h3>{wishboard.title}</h3>
                            <div className="w-100">
                                <Button className="w-50" onClick={() => editWishboard({ title: wishboard.title, id: wishboard.id })}>
                                    Edit
                                </Button>
                                <Button className="w-50" onClick={() => deleteWishboard(wishboard)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                </Button>
            ))}
      </>
    )
}

