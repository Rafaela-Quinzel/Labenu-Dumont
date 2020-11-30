import axios from 'axios';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../../constants/urls';
import { useForm } from '../../../services/useForm'


function SignUpPage() {
  const [form, onChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  const newLogin = (event) => {
    const body = {
      name: form.name,
      email: form.email,
      password: form.password
    }

    event.preventDefault()

    axios.post(`${BASE_URL}/signup`, body)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        history.push('/login')
      }).catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h3>Cadastrar Login:</h3>
        <input 
          value={form.name} 
          onChange={onChange}
          placeholder={'Nome'}
          name={'name'}
          type={'text'} 
          required
        />
        <br />
        <input 
          value={form.email} 
          onChange={onChange}
          placeholder={'E-mail'}
          name={'email'}
          type={'email'} 
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
          required
        />
        <br />
        <input 
          value={form.password} 
          onChange={onChange}
          placeholder={'Senha'}
          name={'password'}
          type={'password'}
          required
        />
        <br/>
        <button onClick={newLogin}>
          SALVAR
        </button>
      </form>
    </div>
  );
}
export default SignUpPage;