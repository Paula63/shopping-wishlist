import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppBar from '../app-bar/AppBar';
import WishboardList from './WishboardList';

export default function WishboardHome() {
    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>Your Wish Boards</h2>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <WishboardList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

