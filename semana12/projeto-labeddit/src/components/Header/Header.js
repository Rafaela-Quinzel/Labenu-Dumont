import React from 'react'
import {  useHistory } from 'react-router-dom'
import { goToLoginPage, goToSignUpPage } from '../../routes/coordinator'
import { HeaderContainer } from './styled'


const Header = () => {

    const history = useHistory()

    return (
        <HeaderContainer>
            <span>logo</span>
            <span>LabEddit</span>
            <button onClick={() => goToSignUpPage(history)}>SIGN UP</button>
            <button onClick={() => goToLoginPage(history)}>lOGIN IN</button>  
        </HeaderContainer>
    )
}
export default Header


