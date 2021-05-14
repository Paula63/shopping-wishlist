import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';
import * as GiIcons from 'react-icons/gi';
import FilterButton from './FilterButton';
import { Button } from 'react-bootstrap';

export default function ItemCard() {

    const [savedItem, setSavedItem] = useState([]);
    // const [filterWishboard, setFilterWishboard] = useState([]);
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
            setLoading(false);
        });
    }

    useEffect(() => {
        getItems();
        getwishboards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refWish = firebase.firestore().collection("items");

    const [buttonFilter, setButtonFilter] = useState([]);
    // const [filterWishboard, setFilterWishboard] = useState([]);

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

    const wishboardNames = [...new Set(buttonFilter.map(item => item.wishboard))];
    console.log("Wish Board Names", wishboardNames);

    // const [buttons, setButtons] = useState(wishboardNames);

    const filter = (button) => {
        const filterItems = buttonFilter.filter(item => item.wishboard === button);
        setButtonFilter(filterItems);
    }

    
    if (loading) {
        return <p>Loading ..</p>
    }

    return (
        <>
            <div>
                {wishboardNames.map((item, i) => {
                    return <Button className="mr-3 mt-4" onClick={() => filter(item)}>{item}</Button>
                })}
            </div>
            {savedItem.map((item) => (
                <div>
                    <div className="item text-center shadow" style={{ width: '240px', height: '310px', marginRight: '8px', marginBottom: '10px' }} key={item.id}>
                        <div className="cont cont-size" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <a href={item.pathURL}>
                                <GiIcons.GiCardboardBox className="item-img-top" style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }} />
                            </a>
                        </div>
                        <div className="item-title text-dark mt-3">
                            <p className="item-name" style={{ wordWrap: 'break-word' }}>{item.displayName}</p>
                            <p className="item-text text-secondary">Wish Board: {item.wishboard}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
