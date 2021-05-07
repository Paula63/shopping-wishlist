import React, { useState, useEffect } from 'react';
import firebase from './../../firebase';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import { Button } from 'react-bootstrap';
import { listenToWishboardsFromFirestore } from '../../firebase/firestoreService';
import { Link } from 'react-router-dom';
import { listenToWishboards } from '../../actions/boardActions';
import { useDispatch, useSelector } from 'react-redux';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

export default function Wishboards() {

    const dispatch = useDispatch();
    // const {wishboards} = useSelector((state) => state.wishboard)
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

    // useFirestoreCollection({
    //     query: () => listenToWishboardsFromFirestore(),
    //     data: wishboards => dispatch(listenToWishboards(wishboards)),
    //     deps: [dispatch]
    // });

    // not needed
    // useFirestoreDoc({
    //     query: () => listenToWishboardFromFirestore(match.params.id),
    //     data: wishboard => dispatchEvent(listenToWishboards([wishboard])),
    //     deps: [match.params.id]
    // });

    // if (loading) {
    //     return <h1>Loading ..</h1>
    // }

    // delete board
    // function deleteWishboard(wishboard) {
    //     ref
    //         .doc(wishboard.id)
    //         .delete()
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    //edit wishboard
    // function editWishboard(updatedWishboard) {
    //     ref
    //         .doc(updatedWishboard.id)
    //         .update(updatedWishboard)
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    return (
        <>
            {wishboards.map((wishboard) => (
                <Button 
                    className="d-flex align-items-center justify-content-center mt-3 shadow" 
                    style={{ width: '34rem', height: '65px', borderRadius: '18px', fontSize: '18px', background: '#fff', color: '#000', borderColor: '#fff' }}
                >
                        <div className="flex flex-row" key={wishboard.id}>
                            <h3>{wishboard.title}</h3>
                            {/* <div className="w-100">
                                <Button className="w-50" onClick={() => editWishboard({ title: wishboard.title, id: wishboard.id })}>
                                    Edit
                                </Button>
                                <Button className="w-50" onClick={() => deleteWishboard(wishboard)}>
                                    Delete
                                </Button>
                            </div> */}
                        </div>
                        <div className="flex flex-row ml-4">
                            <RiIcons.RiDeleteBin2Line 
                                style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end'}} 
                                // onClick={() => deleteWishboard(wishboard)} 
                            />
                            <Link to={`/boards/items/${wishboard.id}`} style={{ color: '#000' }}>
                                <BiIcons.BiWindowOpen 
                                    style={{ width: '30px', height: '30px', float: 'right', justifySelf: 'end', marginRight: '5px'}} 
                                />
                            </Link>
                        </div>
                </Button>
            ))}
      </>
    )
}

