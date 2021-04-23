import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppBar from '../app-bar/AppBar';
import { Button } from '../ButtonElement';
import WishboardList from './WishboardList';

export default function WishboardHome() {

    const [boardsCreated, setBoardsCreated] = useState(false);

    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Your Wish Boards
            </h2>
            {boardsCreated && 
                <h2 className="d-flex align-items justify-content-center mt-5" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                        Start Creating Boards
                </h2>
            }
            <Button to="/new-board" 
                primary="true" 
                dark="true"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                style={{ width: 'auto', float: 'right', marginTop: '-55px', marginRight: '175px' }}
            >
                Create New Wish Board
            </Button>
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

