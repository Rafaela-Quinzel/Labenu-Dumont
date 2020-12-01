import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import { login } from '../../../services/users'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { LoginPageContainer, FormContainer, Logo } from './styled'
import { TextField, Button } from '@material-ui/core'
import LogoPage from '../../../assets/astronauta.svg'



function LoginPage() {
  const {form, onChange, restState} = useForm({
    email: '',
    password: ''
  })
  
  useProtectPage()
  const history = useHistory()


  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  
  const onSubmitForm = (event) => {
      event.preventDefault();
      login(form, history)
  }


  return (
    <LoginPageContainer>
      <Logo src={LogoPage}/>
      <FormContainer onSubmit={onSubmitForm}>
        <TextField
          value={form.email}
          onChange={handleInputChange}
          variant='outlined'
          label='E-mail'
          name='email'
          type='email'
          pattern={'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}'}
          required
        />
        <br/>
        <TextField
          value={form.password}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Senha'
          name='password'
          type='password'
          required
        />
        <Button 
          onClick={login}
          variant='contained'
          color="secondary"
          type='submit'
        >
          LOGIN
        </Button>
        <Button 
          color="secondary"
        >
          Não tem Login? Clique aqui
        </Button>
      </FormContainer>
    </LoginPageContainer>
  );
}
export default LoginPage;