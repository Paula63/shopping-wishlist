import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import * as VscIcons from 'react-icons/vsc';

export default function ProfileContent() {

    const { currentUser } = useAuth();

    return (
        <Container border="info" className="d-flex align-items-center justify-content-center mt-4">
                <div className="w-100" style={{maxWidth: '400px'}}>
                    <Card>
                        <VscIcons.VscAccount 
                            className="w-100 h-8" 
                            style={{ marginTop: '20px', height: '100px', color: '#808080' }} 
                            variant="top" 
                        />
                        <Card.Body>
                            <div className="d-flex justify-content-center mb-2 mt-3">
                                <strong>Email: </strong>{currentUser.email}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
    )
}
