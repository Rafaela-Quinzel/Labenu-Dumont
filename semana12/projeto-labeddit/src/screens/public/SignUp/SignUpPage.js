import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm'
import { signUp } from '../../../services/users'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { SignupPageContainer, FormContainer, Logo } from './styled'
import { TextField, Button } from '@material-ui/core'
import LogoPage from '../../../assets/astronauta.svg'


function SignUpPage() {
  const {form, onChange} = useForm({
    email: "",
    password: "",
    username: ""
  })
  
  // useProtectPage()
  const history = useHistory()

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    signUp(form, history)
  }


  
  return (
    <SignupPageContainer>
      <Logo src={LogoPage}/>
      <FormContainer onSubmit={handleSubmit}>
        <h3>Cadastrar Login:</h3>
        <TextField 
          value={form.username} 
          onChange={handleInputChange}
          variant='outlined'
          label='Nome'
          name='username'
          required
        />
        <br />
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
        <br />
        <TextField 
          value={form.password}
          onChange={handleInputChange}
          variant= 'outlined'
          label='Senha'
          name='password'
          type='password'
          required
        />
        <br/>
        <Button
          variant='contained'
          color="secondary"
          type="submit"
         >
          SALVAR
        </Button>
      </FormContainer>
    </SignupPageContainer>
  );
}
export default SignUpPage;