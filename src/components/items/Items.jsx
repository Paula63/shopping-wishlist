import React, { useState, useEffect } from 'react';
import firebase from './../../firebase';
import AppBar from './../app-bar/AppBar';
import ItemCard from './ItemCard';

export default function Items() {

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

    return (
        <>
            <AppBar />
            {wishboards.map((wishboard) => (
                <div key={wishboard.id}>
                    <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>{wishboard.title}</h2>
                </div>
            ))}
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="row">
                        <ItemCard />
                    </div>
                </div>
            </div>
        </>
    )
}
