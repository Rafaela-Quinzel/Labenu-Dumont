import { LoginContainer, InputLogin, ButtonLogin} from './styled'
import axios from 'axios'



function LoginPage() {


    return (
        <LoginContainer>
            <h3>Página de Login:</h3>
            <InputLogin placeholder={'E-mail'} />
            <br />
            <InputLogin placeholder={'Senha'} />
            <br/>
            <ButtonLogin>Login</ButtonLogin>
        </LoginContainer>
    )
}
export default LoginPage;