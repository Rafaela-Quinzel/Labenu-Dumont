import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {MatchsConteiner, Header, MatchsButton, BackButton, TitleLogo, ProfileImage, ProfileConteiner, ProfileName, Break } from "./styled"
import Matchs from "./images/matchs.svg"
import Back from "./images/back.svg"
import Logo from "./images/logo.svg"


function MatchScreen(props) {
  const [matchs, setMatchs] = useState([])


  useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/matches')
    .then(response => {
      setMatchs(response.data)
      console.log(matchs)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (        
    <MatchsConteiner>
      <Header>
       <MatchsButton src={Back}/>
        <TitleLogo src={Logo}/>
        <BackButton src={Matchs}/>
      </Header>
      <hr/>

      <ProfileConteiner>
       {matchs}
      <ProfileImage src={'https://i.pinimg.com/564x/6e/b2/8c/6eb28cc1549a19b35283aaca49ecd7bf.jpg'}/>
      <ProfileName>Carolina Danvers</ProfileName>
      <Break/>
      <ProfileImage src={'https://i.pinimg.com/564x/6e/b2/8c/6eb28cc1549a19b35283aaca49ecd7bf.jpg'}/>
      <ProfileName>Carolina Danvers</ProfileName>
      <Break/>
      </ProfileConteiner>
       
    
    </MatchsConteiner>
  );
}

export default MatchScreen;
