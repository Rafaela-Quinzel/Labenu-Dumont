import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {HomeConteiner, MainConteiner, ImageUser, Header, NoMatch, Match, UserName, UserAge, UserDescription, ContentScreen, MatchsButton, BackButton, TitleLogo, Footer} from "./styled"
import ButtonNoMatch from "./images/iconnomatch.svg"
import ButtonMatch from "./images/iconheartmatch.svg"
import Back from "./images/back.svg"
import Matchs from "./images/matchs.svg"
import Logo from "./images/logo.svg"


function HomeScreen(props) {
   const [dataProfiles, setDataProfiles] = useState([])


   useEffect(() => {
     renderProfiles()
   }, [])

   const renderProfiles = () => {
     axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
     .then(response => {
       setDataProfiles(response.data)
     })
   }
  return (        
    <HomeConteiner>
     <ContentScreen>
      <Header>
       <MatchsButton src={Back}/>
        <TitleLogo src={Logo}/>
        <BackButton src={Matchs}/>
      </Header>
       <hr/>
      <MainConteiner>
        <ImageUser src={'https://i.pinimg.com/564x/94/81/ab/9481aba77c503d0c99f80ac54810021b.jpg'}/>
         
        <UserName>Amanda Oliveira,</UserName>
        <UserAge> 18 anos</UserAge>
        <UserDescription>Gosto de Viajar!</UserDescription>
      
      </MainConteiner>

        <Footer>
        <NoMatch src={ButtonNoMatch}/>
        <Match src={ButtonMatch}/>
        </Footer>
        </ContentScreen>
    </HomeConteiner>
  );
}

export default HomeScreen;
