import { AboutContainer, Header, Logo, Menu, MainContainer, Footer } from './styled'
import LogoRocket from '../../images/foguete.svg'
import axios from 'axios'



function WhoWeAre() {


    return (
        <AboutContainer>
            <Header>
                <Logo src={LogoRocket} />
                <Menu>Home</Menu>
                <Menu>Viagens</Menu>
                <Menu>Quem somos</Menu>
                <Menu>Dúvidas</Menu>
                <Menu>Fale conosco</Menu>
            </Header>
            <MainContainer>
            <h3>Quem somos:</h3>
            <p>Descrição</p>
            </MainContainer>
            <Footer>Redes Sociais</Footer> 
        </AboutContainer>
    )
}
export default WhoWeAre;