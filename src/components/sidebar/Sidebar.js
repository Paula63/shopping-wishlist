import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SideBtnWrap, 
    SidebarWrapper, 
    SidebarLink,
    SidebarMenu,
    SidebarRoutes
} from './SidebarElements';

export default function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About
                    </SidebarLink>
                    <SidebarLink to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to="/login">Log In</SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
