import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../../../services/useForm'
// import { InputNewLogin } from '../../../constants/inputs'
import { BASE_URL } from '../../../constants/urls'


function LoginPage() {
  const [form, onChange] = useForm({
    email: '',
    password: ''
  })

  
  const pathParams = useParams()
  const id = pathParams.id
  const history = useHistory()
  
  
  const onSubmitForm = (event) => {
      event.preventDefault();
  }


  useEffect(() => {
      const token = localStorage.getItem('token')

      if(token) {
          history.push('/feeds')
      }
  }, [history])


  const login = () => {
    const body = {
      email: form.email,
      password: form.password
    }
      axios.post(`${BASE_URL}/login`,body)
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          history.push('/feeds')
        }).catch((error) => {
            alert('Login inválido!')
            console.log(error)
        })
  }


  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input 
          value={form.email}
          onChange={onChange}
          placeholder={'Email'} 
          name={'email'}
          type={'email'}
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
          required
        />
        <br/>
        <input 
          value={form.password}
          onChange={onChange}
          placeholder={'Senha'} 
          name={'password'}
          type={'password'}
          required
        />
        <button onClick={login}>
          LOGIN
        </button>
      </form>
    </div>
  );
}
export default LoginPage;