import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppBar from '../app-bar/AppBar';
import { Button } from '../ButtonElement';
import Wishboards from './Wishboards';

export default function WishboardHome() {

    // const {loading} = useSelector(state => state.async);

    // if(loading) return <LoadingComponent />

    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Your Wish Boards
            </h2>
            <Button 
                to="boards/new-board" 
                primary="true" 
                dark="true" 
                exact='true' 
                offset={-80}
                style={{ width: 'auto', float: 'right', marginTop: '-65px', marginRight: '175px' }}
            >
                Create New Wish Board
            </Button>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <Wishboards />
                    </Col>
                </Row>
            </Container>
        </>
    )
}