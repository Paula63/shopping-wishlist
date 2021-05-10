import React, { useState } from 'react';
import firebase from './../../firebase';
import { v4 as uuidv4 } from "uuid";
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppBar from '../app-bar/AppBar';

// const db = app.database();

export default function NewBoardForm() {

    // eslint-disable-next-line no-lone-blocks
    {/*const initialValues = {
        title: '',
    };

    const [values, setValues] = useState(initialValues);

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: value });
    } */}

    // const [title, setTitle] = useState('');
    // const { id } = useParams();

    // eslint-disable-next-line no-lone-blocks
    {/* const handleInputChange = (e) => {
        setTitle(e.target.value)
    } */}

    // eslint-disable-next-line no-lone-blocks
    {/* const createBoard = () => {
        const boardRef = database.database().ref("wishboard");
        const board = {
            title,
            complete: false,
        };
        boardRef.push(board);    
    } */}

    //add new board 
    const ref = firebase.firestore().collection("wishboards");
    const [title, setTitle] = useState("");

    function addWishboard(newWishboard) {
        ref
            .doc(newWishboard.id)
            .set(newWishboard)
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <AppBar />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">
                                Create New Wish Board
                            </h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Wish Board Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Wish Board Name" 
                                        name="title"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Button 
                                    onClick={() => addWishboard({ title, id: uuidv4() })} 
                                    className="w-100" 
                                    style={{ background: '#588cfc' }} 
                                    variant="outline-light" 
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className = "w-100 text-center mt-2">
                        <Link to="/boards">Return to Wish Boards</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
