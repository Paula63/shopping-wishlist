import React, { useState } from 'react';
import { Container, Card, Form } from 'react-bootstrap';
import { Button } from '../ButtonElement';
import { Link } from 'react-router-dom';
import cuid from 'cuid';

export default function NewBoardForm({ setBoard, createBoard }) {

    const initialValues = {
        title: '',
    };

    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        createBoard({...values, id: cuid()});
    }

    function handleInputChange(e) {
        const {name, value} = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{maxWidth: '400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">
                            Create New Wish Board
                        </h2>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Group>
                                <Form.Label>Wish Board Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter Wish Board Name" 
                                    name="title"
                                    value={values.title} 
                                    onChange={(e) => handleInputChange(e)} 
                                    required 
                                />
                            </Form.Group>
                            <Button 
                                to="/boards" 
                                primary="true" 
                                dark="true"
                                exact='true' 
                                offset={-80}
                                style={{ height: '40px' }}
                            >
                                Save
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className = "w-100 text-center mt-2">
                    <Link to="/boards">Cancel</Link>
                </div>
            </div>
        </Container>
    )
}
