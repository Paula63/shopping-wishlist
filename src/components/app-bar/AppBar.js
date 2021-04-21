import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap'
import { useAuth } from './../../contexts/AuthContext';
import { DashboardContainer, BarWrap, AppLogo, ButtonWrap, ButtonLink } from './AppBarStyles';
import UserSidebar from './../user-sidebar/UserSidebar';


export default function AppBar() {

    const [error, setError] = useState('')
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch{
            setError('Failed to log out')
        }
    }

    return (
        <>
            <DashboardContainer>
                <UserSidebar />
                <BarWrap>
                    <AppLogo to="/">Shopping Wishlist</AppLogo>
                    <ButtonWrap>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <ButtonLink onClick={handleLogout}>Sign Out</ButtonLink>
                    </ButtonWrap>
                </BarWrap>
            </DashboardContainer>
        </>
    )
}
