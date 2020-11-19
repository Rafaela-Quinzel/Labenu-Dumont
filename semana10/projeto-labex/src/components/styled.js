import styled from 'styled-components'
import { mainBlue } from '../constants/colors'
import { Link } from 'react-router-dom'

// Styled Header
export const HeaderContainer = styled.header`
   background-color: ${mainBlue};
   color: white;
   width: 100%;
   height: 15vh;
`

export const Logo = styled.img`
   width: 130px;
   margin-left: 2%;
   margin-right: 50%;
   margin-top: 10px;
   padding-bottom: 5px;
`

export const Menu = styled(Link)`
   cursor: pointer;
   text-decoration: none;
   &:hover {
     border-bottom: 2px solid white;
   }
   margin-left: 4%;
   color: white;
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