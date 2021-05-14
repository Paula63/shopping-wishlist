import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../../firebase';


export default function FilterButton() {

    const refWish = firebase.firestore().collection("items");

    const [buttonFilter, setButtonFilter] = useState([]);
    const [filterWishboard, setFilterWishboard] = useState([]);

    function getwishboards() {
        // setLoading(true);
        refWish.onSnapshot((querySnapshot) => {
            const wishboardType = [];
            querySnapshot.forEach((doc) => {
                wishboardType.push(doc.data());
            })
            setButtonFilter(wishboardType);
            // setLoading(false);
        });
    }

    useEffect(() => {
        getwishboards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const wishboardNames = [...new Set(buttonFilter.map(item => item.wishboard))];
    console.log("Wish Board Names", wishboardNames);

    // const [buttons, setButtons] = useState(wishboardNames);

    const filter = (button) => {
        const filterItems = buttonFilter.filter(item => item.wishboard === button);
        setButtonFilter(filterItems);
    }

    return (
        <>
            {wishboardNames.map((item, i) => {
                return <Button className="mr-3 mt-4" onClick={() => filter(item)}>{item}</Button>
            })}
        </>
    )
}
