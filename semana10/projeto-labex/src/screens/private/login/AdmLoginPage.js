import React, { useEffect, useState } from 'react'
import { LoginContainer, InputLogin, ButtonLogin} from './styled'
// import { useForm } from '../../../services/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            history.push('/viagens_adm')
        }
    }, [history])

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }
   
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/login',
        body
        ).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push('/viagens_adm')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <h3>Página de Login:</h3>
            <InputLogin type='email' placeholder={'E-mail'} value={email} onChange={handleEmail}/>
            <br />
            <InputLogin type='password' placeholder={'Senha'} value={password} onChange={handlePassword}/>
            <br/>
            <ButtonLogin onClick={login}>Login</ButtonLogin>
        </LoginContainer>
    )
}
export default LoginPage;