import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const DashboardContainer = styled.nav`
background: #000033;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`;

export const BarWrap = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const AppLogo = styled(LinkRoute)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #fff;
    }
`;

export const ButtonWrap = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    
`;

export const ButtonLink = styled(LinkRoute)`
    border-radius: 50px;
    background: #588cfc;
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
        background: #dcffff;
        color: #010606;
    }
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;