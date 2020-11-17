import styled from 'styled-components'
import { mainBlue, mainBlack } from '../constants/colors'

// Styled Header
export const HeaderContainer = styled.header`
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 12vh;
`

export const Logo = styled.img`
   width: 40px;
   margin-left: 2%;
   margin-right: 55%;
   margin-top: 1%;
`

export const Menu = styled.span`
   cursor: pointer;
   &:hover {
     border-bottom: 2px solid white;
   }
   margin-left: 4%;
`


// Styled Footer
export const FooterContainer = styled.footer`
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 12vh;
   text-align: center;
   position: absolute;
`