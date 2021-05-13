import React, { useState } from 'react';
import firebase from './../../firebase';
import { v4 as uuidv4 } from "uuid";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppBar from '../app-bar/AppBar';

export default function NewItemForm() {

    //add new items 
    const ref = firebase.firestore().collection("items");
    const [displayName, setDisplayName] = useState("");
    const [reduction, setReduction] = useState("");
    const [wishboard, setWishboard] = useState("");
    const [pathURL, setPathURL] = useState("");

    function addItem(newItem) {
        ref
            .doc(newItem.id)
            .set(newItem)
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <AppBar />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-40px' }}>
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">
                                Add New Item
                            </h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Enter a name for the item: </Form.Label>
                                    <Form.Control 
                                        className="mb-3"
                                        type="text" 
                                        placeholder="Item Name" 
                                        name="displayName"
                                        onChange={(e) => setDisplayName(e.target.value)}
                                    />
                                    <Form.Label>Enter the direct URL for the item:  </Form.Label>
                                    <Form.Control 
                                        className="mb-3"
                                        type="text" 
                                        placeholder="Direct Item URL" 
                                        name="pathURL"
                                        onChange={(e) => setPathURL(e.target.value)}
                                    />
                                    <Form.Label>Enter the name of the wish board: </Form.Label>
                                    <Form.Control 
                                        className="mb-3"
                                        type="text" 
                                        placeholder="Existing Wish Board Name" 
                                        name="wishboard"
                                        onChange={(e) => setWishboard(e.target.value)}
                                    />
                                    <Form.Label>Enter a reduction preference: </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Reduction Mark" 
                                        name="reduction"
                                        onChange={(e) => setReduction(e.target.value)}
                                    />
                                    <Form.Text className="text-muted">
                                        Preferably any of the following: 20%, 50%, or any changes
                                    </Form.Text>
                                </Form.Group>
                                <Button 
                                    onClick={() => addItem({ displayName, pathURL, wishboard, reduction, id: uuidv4() })} 
                                    className="w-100" 
                                    style={{ background: '#588cfc' }} 
                                    variant="outline-light" 
                                    type="submit"
                                >
                                    Add Item
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className = "w-100 text-center mt-2">
                        <Link to="/view-all-items">Return to Wish Boards Page</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
