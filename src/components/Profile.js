import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Alert, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AppBar from './app-bar/AppBar';
import UserSidebar from './user-sidebar/UserSidebar';

export default function Profile() {

    const PageName = styled.h2`
        justify-self: center;
        align-items: center;
        font-size: 2rem;
        color: #000;
        margin-top: 25px;
        margin-bottom: 50px;
    `;

    const PageContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        top: 0;
        z-index: 10;
    `;

    const PageWrap = styled.div`
        display: flex;
        justify-content: space-between;
        z-index: 1;
        width: 100%;
        padding-left: 60px;
        max-width: 1100px;
    `;

    const ButtonWrapper = styled.div`
        display: flex;
        align-items: center;
    `;

    const ButtonLinkSec = styled(Link)`
        border-radius: 50px;
        background: #bf4b49;
        white-space: nowrap;
        padding: 10px 22px;
        color: #010606;
        font-size: 16px;
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover {
            transition: all 0.2s ease-in-out;
            background: #bf4b49;
            color: #010606;
        }
        
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
            color: #000;
        }
    `;

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
            {/* <div className="flex flex-row">
                <PageName className="d-flex align-items-center justify-content-center">
                    Profile
                </PageName>
            </div>
            <Container className="d-flex align-items-center justify-content-center">
                <div style={{maxWidth: '400px'}}>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                        Update profile
                    </Link>
                </div>
            </Container> */}
        </>
    )
}