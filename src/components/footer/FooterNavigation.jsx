import React from 'react';
import { DashboardContainer, BarWrap, AppLogo, ButtonWrap, ButtonLink } from '../app-bar/AppBarStyles';

export default function FooterNavigation() {
    return (
        <>
            <DashboardContainer>
                <BarWrap>
                    <AppLogo to="/main">Shopping Wishlist</AppLogo>
                    <ButtonWrap>
                        <ButtonLink to="/login">Log In</ButtonLink>
                    </ButtonWrap>
                </BarWrap>
            </DashboardContainer>
        </>
    )
}
