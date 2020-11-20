import React, { useEffect, useState } from 'react'
import { LoginContainer, InputLogin, ButtonLogin} from './styled'
import { useForm } from '../../../services/useForm'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'


function LoginPage() {
    const [form, onChange] = useForm({
        email: '',
        password: ''
    })
    

    const pathParams = useParams()
    const id = pathParams.id
    const history = useHistory()
    

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            history.push(`/viagens_adm/${id}`)
        }
    }, [history, id])

  
    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        }
   
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/login',
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.token)
            history.push(`/viagens_adm/${id}`)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <LoginContainer>
            <h3>Página de Login:</h3>
            <InputLogin 
                value={form.email} 
                onChange={onChange}
                placeholder={'E-mail'}
                name={'email'}
                type={'email'}
                pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
                required  
            />
            <br />
            <InputLogin 
                value={form.password} 
                onChange={onChange}
                placeholder={'Senha'} 
                name={'password'}
                type={'password'}
                required 
            />
            <br/>
            <ButtonLogin onClick={login}>Login</ButtonLogin>
        </LoginContainer>
    )
}
export default LoginPage;