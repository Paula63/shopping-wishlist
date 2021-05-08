import React from 'react';
import FooterNavigation from './FooterNavigation';
import { Container, Card } from 'react-bootstrap';

export default function Support() {
    return (
        <>
            <FooterNavigation />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '600px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                Support
                            </h2>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <div className="mb-2">
                                    For assistance email us at <strong>shoppingwishlist@gmail.com</strong>. 
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
