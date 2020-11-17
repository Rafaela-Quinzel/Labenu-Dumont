import { HomeContainer, Header, Logo, Menu, MainContainer, ButtonSignUp, ButtonLogin, Footer} from './styled'
import LogoRocket from '../../images/foguete.svg'
// import axios from 'axios'



function HomePage() {


    return (
        <HomeContainer>
           <Header>
                <Logo src={LogoRocket} />
                <Menu>Home</Menu>
                <Menu>Viagens</Menu>
                <Menu>Quem somos</Menu>
                <Menu>Dúvidas</Menu>
                <Menu>Fale conosco</Menu>
            </Header>
            <MainContainer>
                <h2>Embarque conosco nessa aventura!</h2>
                <ButtonSignUp>Inscreva-se</ButtonSignUp>
                <ButtonLogin>Login</ButtonLogin>
            </MainContainer>

            <Footer>Redes Sociais</Footer>
        </HomeContainer>
    )
}
export default HomePage;