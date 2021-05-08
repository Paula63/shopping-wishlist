import React from 'react';
import FooterNavigation from './FooterNavigation';
import { Container, Card } from 'react-bootstrap';

export default function ContactUs() {
    return (
        <>
            <FooterNavigation />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '600px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                Contact Us
                            </h2>
                            <div className="d-flex row align-items justify-content-center mb-2">
                                <div className="mb-2">
                                    You can follow us on Instagram at <strong>@ShoppingWishlist</strong>. 
                                </div>
                                <div className="mb-2">
                                    You can also find us on Facebook <strong>TheShoppingWishlist</strong>. 
                                </div>
                                <div className="mb-2">
                                    For more information or queries contact our support department. 
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
