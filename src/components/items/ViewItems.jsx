import React, { useState, useEffect } from 'react';
import './container.css';
import firebase from '../../firebase';
import * as AiIcon from 'react-icons/ai';
// import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
// import { Button } from 'react-bootstrap';
// import Shopping from '../../images/shopping.svg';

export default function ViewItems() {

    // const cardIcons = [
    //     {id: '1', value: <FiIcons.FiAperture />}, 
    //     {id: '2', value: <GiIcons.GiWallet />},
    //     {id: '3', value: <GiIcons.GiBoxUnpacking />},
    //     {id: '4', value: <GiIcons.GiCardboardBox />},
    //     {id: '5', value: <GiIcons.GiHobbitDoor />},
    //     {id: '6', value: <GiIcons.GiHive />}
    // ];
    // const [randomIcon, setRandomIcon] = useState();

    const [savedItem, setSavedItem] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("items");

    // const randomIcon = cardIcons[Math.floor(Math.random() * cardIcons.length)];

    // const selectRandomIcon = () => {
    //     
    //     setRandomIcon(randomIcon);
    // }

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
                <div className="item text-center shadow" style={{ width: '240px', height: '310px', marginRight: '8px' }} key={item.id}>
                    <div className="cont cont-size" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <a href={item.pathURL}>
                            {/* {cardIcons.map(icons => (
                                <div key={item.id} className="item-img-top" style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }}>
                                    {icons.value}
                                </div>
                            ))} */}
                            <GiIcons.GiCardboardBox className="item-img-top" style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }} />
                            {/* <GiIcons.GiHobbitDoor className="item-img-top" style={{ color: '#000', marginTop: '25px', marginLeft: '5px', width: '120px' }} /> */}
                        </a>
                    </div>
                    <div className="item-title text-dark">
                        <p className="item-name" style={{ wordWrap: 'break-word' }}>{item.displayName}</p>
                        <p className="item-text text-secondary">Wish Board: {item.wishboard}</p>
                        <div  style={{ marginTop: '-15px', marginLeft: '180px' }}>
                            <AiIcon.AiOutlineClose style={{ width: '25px', height: '25px' }} onClick={() => deleteItem(item)} key={item.id} />
                        </div>
                        {/* <RiIcons.RiDeleteBin2Line 
                            style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                            onClick={() => deleteItem(item)} 
                        /> */}
                        <div className="holder-button" style={{ borderRadius: '15px', marginRight: '-80px' }} variant="outline-light" type="Submit">
                            <RiIcons.RiDeleteBin2Line 
                                style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                                onClick={() => deleteItem(item)} 
                            />
                        </div>
                    </div>
                </div>
            ))}  
        </>
    )
}
