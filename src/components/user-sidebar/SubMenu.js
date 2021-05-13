import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from './../../firebase';
import styled from 'styled-components';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #00005a;
        border-left: 4px solid #dcffff;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 20px;
`;

const DropdownLink = styled(Link)`
    background: #000033;
    height: 60px;
    padding-left: 4rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 18px;

    &:hover {
        background: #00005a;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
`;

export default function SubMenu() {

    const [subnav, setSubnav] = useState(false);

    const [wishboards, setWishboards] = useState([]);

    const showSubnav = () => setSubnav(!subnav);

    const ref = firebase.firestore().collection("wishboards");

    function getWishboards() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setWishboards(items);
        });
    }

    useEffect(() => {
        getWishboards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div>
            <SidebarLink to='/profile'>
                <div>
                    <MdIcons.MdAccountCircle />
                    <SidebarLabel>Profile</SidebarLabel>
                </div>
            </SidebarLink>
            </div>
            <SidebarLink to='/settings'>
                <div>
                    <RiIcons.RiSettings3Fill />
                    <SidebarLabel>Settings</SidebarLabel>
                </div>
            </SidebarLink>
            <SidebarLink to='/boards' onClick={wishboards.subNav && showSubnav}>
                <div>
                    <RiIcons.RiArtboardLine />
                    <SidebarLabel>Wish Boards</SidebarLabel>
                </div>
            </SidebarLink>
            {wishboards && wishboards.map((wishboard) => {
                return(
                    <DropdownLink to={`/boards/${wishboard.id}`} key={wishboard.id}>
                        <RiIcons.RiArtboard2Line />
                        <SidebarLabel>{wishboard.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
            {/* {toggleVisibility ? true &&
                <div>
                    <RiIcons.RiArrowUpSFill />
                    {wishboards && wishboards.map((wishboard) => {
                        return(
                            <DropdownLink to='/boards' key={wishboard.id} onClick={notify}>
                                <RiIcons.RiArtboard2Line />
                                <SidebarLabel>{wishboard.title}</SidebarLabel>
                            </DropdownLink>
                        )
                    })}
                </div> 
            : 
                <div>
                    <RiIcons.RiArrowDownSFill />
                </div>
            } */}
        </>
    )
}
