import React from 'react'
import { HomeContainer, MainContainer, ButtonSignUp, ButtonLogin } from './styled'
import  Header  from '../../components/Header'
import  Footer  from '../../components/Footer'
import { useHistory } from 'react-router-dom'


function HomePage(){


   const history = useHistory()

   const goToLoginPage = () => {
       history.push('/login')
   }

   const goToApplicationFormPage = () => {
        history.push('/inscreva-se')
   }

    return (
        <HomeContainer>
           <Header/>
               <MainContainer>
                    <h2>Embarque conosco nessa aventura!</h2>
                    <ButtonSignUp onClick={goToApplicationFormPage}>Inscreva-se</ButtonSignUp>
                    <ButtonLogin onClick={goToLoginPage}>Login</ButtonLogin>
               </MainContainer>
           <Footer />
        </HomeContainer>
    )
}
export default HomePage;