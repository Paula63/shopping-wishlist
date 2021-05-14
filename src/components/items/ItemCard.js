import React, { useState, useEffect } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import * as GiIcons from 'react-icons/gi';
import './container.css';
import firebase from '../../firebase';

export default function ItemCard() {

    const [savedItem, setsavedItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Search Wish Boards" 
                    onChange={event => {setSearchTerm(event.target.value)}}
                />
            </InputGroup>
            {savedItem.filter((item) => {
                if(searchTerm === ""){
                    return item;
                } else if(item.wishboard.toLowerCase().includes(searchTerm.toLowerCase())){
                    return item;
                }}
            ).map((item) => (
                <div>
                    <div 
                        className="item text-center shadow" 
                        style={{ width: '240px', height: '310px', marginRight: '8px', marginBottom: '10px' }} 
                        key={item.id}
                    >
                        <div 
                            className="cont cont-size" 
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <a href={item.pathURL}>
                                <GiIcons.GiCardboardBox 
                                    className="item-img-top" 
                                    style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }} 
                                />
                            </a>
                        </div>
                        <div className="item-title text-dark mt-3">
                            <p className="item-name" style={{ wordWrap: 'break-word' }}>{item.displayName}</p>
                            <p className="item-text text-secondary" style={{ wordWrap: 'break-word' }}>Wish board: {item.wishboard}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
