import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #000033;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }    
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #000

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 22px;
    margin-bottom: 16px;
    color: #92b4fd;
`;

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #bf4b49;
        text-decoration: none;
        transition: 0.3s ease-out
    }
`;

export const CopyRight = styled.section`
    max-width: 500px;
    width: 100%;
`;

export const CopyRightWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 420px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    color: #000;
    margin-left: 90px;
`;