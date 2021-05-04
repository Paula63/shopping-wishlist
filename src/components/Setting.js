import React from 'react';
import { Card, Container } from 'react-bootstrap';
import AppBar from './app-bar/AppBar';
import { ButtonLinkSec, ButtonWrapper } from './ReusablePage';

export default function Setting() {
    return (
        <>
            <AppBar />
            <h2 data-testid="title" className="d-flex align-items justify-content-center mt-5 mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                Settings
            </h2>
            <Container className="flex align-items-center justify-content-center mt-3" style={{maxWidth: '900px'}}>
                <div>
                    <Card>
                        <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '500px'}}>
                            <h5>
                                User Settings
                            </h5>
                            <div>
                                Visit your profile page to view more details.
                            </div>
                            <ButtonWrapper style={{marginLeft: '700px', marginTop: '-52px'}}>
                                <ButtonLinkSec to="/profile">View Profile</ButtonLinkSec>
                            </ButtonWrapper>
                        </div>
                        <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '500px'}}>
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
                        <div className="flex mt-3 ml-3 mb-4" style={{maxWidth: '500px'}}>
                            <h5>
                                Support
                            </h5>
                            <div>
                                For assistance email us at <strong>shoppingwishlist@gmail.com</strong>. 
                            </div>
                        </div>
                    </Card>
                </div>
            </Container>
        </>
    )
}
