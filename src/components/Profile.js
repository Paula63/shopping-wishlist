import React, { useState } from 'react';
import { Card, Alert, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AppBar from './app-bar/AppBar';
import UserSidebar from './user-sidebar/UserSidebar';
import { PageContainer, PageName, PageWrap, ButtonWrapper, ButtonLinkSec } from './ReusablePage';

export default function Profile() {

    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const history = useHistory()


    return (
        <>
            <AppBar />
            <UserSidebar />
            <PageContainer>
                <PageWrap>
                    <PageName>
                        Profile
                    </PageName>
                    <ButtonWrapper>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <ButtonLinkSec>Update Profile</ButtonLinkSec>
                    </ButtonWrapper>
                </PageWrap>
            </PageContainer>
            <Container border="info" className="d-flex align-items-center justify-content-center mt-3">
                <div className="w-100" style={{maxWidth: '300px'}}>
                    <Card>
                        <Card.Body>
                            <strong>Email:</strong> {currentUser.email}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}