import React from 'react'
import { FooterContainer, IconsSocial } from './styled'
import LogoFacebook from '../assets/icons/facebook.svg';
import LogoInstagram from '../assets/icons/instagram.svg';
import LogoTwitter from '../assets/icons/twitter.svg';


const Footer = () => {
    return (
        <FooterContainer>
            <IconsSocial src={LogoFacebook}/>
            <IconsSocial src={LogoInstagram}/>
            <IconsSocial src={LogoTwitter}/>
        </FooterContainer>
    )
}
export default Footer;