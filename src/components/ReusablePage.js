import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageName = styled.h2`
    justify-self: center;
    align-items: center;
    font-size: 2rem;
    color: #000;
    margin-top: 25px;
    margin-bottom: 50px;
`;

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
`;

export const PageWrap = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding-left: 60px;
    max-width: 1100px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonLinkSec = styled(Link)`
    border-radius: 50px;
    background: #bf4b49;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #bf4b49;
        color: #000;
    }
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;