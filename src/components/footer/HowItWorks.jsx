import React from 'react';
import FooterNavigation from './FooterNavigation';
import { Container, Card } from 'react-bootstrap';

export default function HowItWorks() {
    return (
        <>
            <FooterNavigation />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '600px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                How It works?
                            </h2>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <h4 style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    Install Our Browser Extension
                                </h4>
                                <p className="ml-4 mr-4">
                                    Once our highly intuitive Chrome extension is installed on your browser you can start enjoying the available features.
                                </p>
                            </div>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <h4 style={{ fontFamily: 'Open Sans, sans-serif' }}>
                                    Wish Boards, Discounts and More
                                </h4>
                                <p className="ml-4 mr-4">
                                    Use our website to create unlimited wish boards and save items for later. We will make sure to send you an email when
                                    the item goes on sale.
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
