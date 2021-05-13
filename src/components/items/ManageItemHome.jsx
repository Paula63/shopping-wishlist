import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AppBar from '../app-bar/AppBar';
import { Button } from '../ButtonElement';
import ManageItems from './ManageItems';


export default function ManageItemHome() {
    return (
        <>
            <AppBar />
            <h2 className="d-flex align-items justify-content-center mt-5 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Manage Your Items
            </h2>
            <Button 
                to="/boards/items/new-item" 
                primary="true" 
                dark="true" 
                exact='true' 
                offset={-80}
                style={{ width: 'auto', float: 'right', marginTop: '-65px', marginRight: '210px' }}
            >
                Add New Item
            </Button>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md='auto'>
                        <ManageItems />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
