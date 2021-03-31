import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';

export const Button = styled(LinkRoute)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#bf4b49' : '#f4dcd9')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#f4dcd9')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#f4dcd9' : '#bf4b49')};
    }

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;