import React from 'react';
import { Card, Container } from 'react-bootstrap';
import AppBar from './app-bar/AppBar';
import { ButtonLinkSec, ButtonWrapper } from './ReusablePage';

export default function Setting() {
    return (
        <>
            <AppBar />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '700px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                Settings
                            </h2>
                            <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '600px', marginTop: '10px'}}>
                                <h5>
                                    User Settings
                                </h5>
                                <div>
                                    Visit your profile page to view more details.
                                </div>
                                <ButtonWrapper style={{marginLeft: '500px', marginTop: '-52px'}}>
                                    <ButtonLinkSec to="/profile">View Profile</ButtonLinkSec>
                                </ButtonWrapper>
                            </div>
                            <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '500px', marginTop: '15px'}}>
                                <h5>
                                    Contact Us
                                </h5>
                                <div>
                                    You can follow us on Instagram at <strong>@ShoppingWishlist</strong>. 
                                </div>
                                <div>
                                    You can also find us on Facebook <strong>TheShoppingWishlist</strong>. 
                                </div>
                                <div>
                                    For more information or queries contact our support department. 
                                </div>
                            </div>
                            <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '500px', marginTop: '10px'}}>
                                <h5>
                                    Support
                                </h5>
                                <div>
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
