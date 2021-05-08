import React from 'react';
import FooterNavigation from './FooterNavigation';
import { Container, Card } from 'react-bootstrap';

export default function Tips() {
    return (
        <>
            <FooterNavigation />
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", marginTop: '-100px' }}>
                <div className="w-100" style={{maxWidth: '500px'}}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4" >
                                Our Tips {'&'} Pointers
                            </h2>
                            <div className="mb-2">
                                1{') '}Create wish boards for each item category. 
                            </div>
                            <div className="mb-2">
                                2{') '}Customise wish boards to contain your most wanted items.
                            </div>
                            <div className="mb-2">
                                3{') '}Delete wish boards or items that are not needed.
                            </div>
                            <div className="mb-2">
                                4{') '}Choose when to receive discount notifications for your items.
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
