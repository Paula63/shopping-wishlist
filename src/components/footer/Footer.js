import React from 'react';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    CopyRight,
    CopyRightWrap,
    WebsiteRights 
} from './FooterElements';

export default function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/login">Create Account</FooterLink>
                            <FooterLink to="/works">How it Works</FooterLink>
                            <FooterLink to="/clients">Clients</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/contact">Contact</FooterLink>
                            <FooterLink to="/support">Support</FooterLink>
                            <FooterLink to="/spons">Sponsorship</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <CopyRight>
                    <CopyRightWrap>
                        <WebsiteRights>Shopping Wishlist © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
                    </CopyRightWrap>
                </CopyRight>
            </FooterWrap>
        </FooterContainer>
    )
}
