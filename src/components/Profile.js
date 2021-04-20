import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import AppBar from './app-bar/AppBar';
import UserSidebar from './user-sidebar/UserSidebar';
import { PageContainer, PageName, PageWrap, ButtonWrapper, ButtonLinkSec } from './ReusablePage';

export default function Profile() {

    const { currentUser } = useAuth()

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
                        <ButtonLinkSec to="/update-profile">Update Profile</ButtonLinkSec>
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