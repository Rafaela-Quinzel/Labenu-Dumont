import React from 'react'
import { AboutContainer, MainContainer } from './styled'
import  Header  from '../../../components/Header'
import  Footer  from '../../../components/Footer'



function WhoWeAre() {


    return (
        <AboutContainer>
            <Header />
            <MainContainer>
            <h3>Quem somos:</h3>
            <p>Descrição</p>
            </MainContainer>
            <Footer /> 
        </AboutContainer>
    )
}
export default WhoWeAre;