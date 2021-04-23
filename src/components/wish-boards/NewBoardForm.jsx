import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NewBoardForm() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{maxWidth: '400px'}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">
                            Create New Wish Board
                        </h2>
                        <Form>
                            <Form.Group>
                                <Form.Label>Wish Board Name</Form.Label>
                                <Form.Control type="input" placeholder="Enter Wish Board Name" required />
                            </Form.Group>
                            <Button className="w-100" style={{ background: '#588cfc' }} variant="outline-light" type="submit">Save</Button>
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
