import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Wishboards() {
    return (
        <Card className="d-flex align-items-center justify-content-center mt-3 shadow" style={{ width: '34rem', borderRadius: '18px' }} >
            <Card.Body>
                <Card.Title className="text-center mt-1 mb-1" style={{ marginBottom: '-1px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                        Furniture
                    </Link>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

