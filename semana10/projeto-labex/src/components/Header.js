import React from 'react'
import { HeaderContainer, Logo, Menu } from './styled'
import LogoRocket from '../assets/images/foguete.svg';



const Header = () => {

    return (
        <HeaderContainer>
            <Logo src={LogoRocket} />
            <Menu to='/home'>Home</Menu>
            <Menu to='/viagens'>Viagens</Menu>
            <Menu to='/sobre'>Quem somos</Menu>
            <Menu to='/contato' target='_blank'>Fale conosco</Menu>
            {/* TESTE <a href=' https://co.pinterest.com/' target='_blank' >clique</a> */}

        </HeaderContainer>
    )
}
export default Header;