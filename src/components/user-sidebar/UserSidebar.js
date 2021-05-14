import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background: #000033;
    height: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const SidebarNav = styled.nav`
    background: #000033;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    margin-top: 80px;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

export default function UserSidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#' style={{ marginLeft: '-185px' }}>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <SidebarNav sidebar={sidebar}>
                        <SidebarWrap>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} />
                            })}
                        </SidebarWrap>
                    </SidebarNav>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
