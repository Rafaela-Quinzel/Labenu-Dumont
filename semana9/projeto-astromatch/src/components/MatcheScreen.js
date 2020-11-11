import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {MatchesConteiner, HeaderMatches, MatchesButton, BackButton, LogoMatches, ProfileImage, MatcheImage, MatcheName, Break, InfoMatches } from "./styled"
import Matches from "./images/matchs.svg"
import Back from "./images/back.svg"
import Logo from "./images/logo.svg"


function MatcheScreen() {
const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])


  const getMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
    .then(response => {
      setMatches(response.data.profile)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }



  return (        
    <MatchesConteiner>

      <HeaderMatches>
        <BackButton src={Back}/>
        <LogoMatches src={Logo}/>
      </HeaderMatches>
      <hr/>

      <InfoMatches key={matches.id}>
        <MatcheImage src={matches.photo}/>
        <MatcheName>{matches.name}</MatcheName>
        <Break/>

        <MatcheImage src={'https://i.pinimg.com/564x/6e/b2/8c/6eb28cc1549a19b35283aaca49ecd7bf.jpg'}/>
        <MatcheName>Carolina Danvers</MatcheName>
        <Break/>

      </InfoMatches>
       
    </MatchesConteiner>
  );
}

export default MatcheScreen;
