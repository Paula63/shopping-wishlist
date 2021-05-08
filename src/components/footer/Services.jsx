import React from 'react';
import FooterNavigation from './FooterNavigation';
import { Container, Card } from 'react-bootstrap';

export default function Services() {
    return (
        <>
            <FooterNavigation />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '600px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                Our Services
                            </h2>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <h4 style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    Find the best online bargains
                                </h4>
                                <p>
                                    We can help you save on future purchases and orders
                                </p>
                            </div>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <h4 style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    Shop more efficiently
                                </h4>
                                <p>
                                    We will make online shopping less time consuming for you
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
