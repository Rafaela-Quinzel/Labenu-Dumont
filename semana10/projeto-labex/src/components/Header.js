import React from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer, Logo, Menu } from './styled'
import LogoRocket from '../assets/images/foguete.svg';



const Header = () => {

    const history = useHistory()
     
    const goToHomePage = () => {
        history.push("/")
    }
     
    const goToListTripsPage = () => {
        history.push('/viagens')
    }

    const goToAboutPage = () => {
        history.push('/sobre')
    }

    const goToContactPage = () => {
        history.push('/contato')
    }

    return (
        <HeaderContainer>
            <Logo src={LogoRocket} />

            <Menu onclick={goToHomePage}>Home</Menu>
            <Menu onClick={goToListTripsPage}>Viagens</Menu>
            <Menu onClick={goToAboutPage}>Quem somos</Menu>
            <Menu onClick={goToContactPage}>Fale conosco</Menu>
        </HeaderContainer>
    )
}
export default Header;