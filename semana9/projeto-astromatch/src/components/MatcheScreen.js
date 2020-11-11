import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {MatchesConteiner, HeaderMatches, BackButton, LogoMatches, ProfileImage, MatcheImage, MatcheName, Break, InfoMatches } from "./styled"
import Back from "./images/back.svg"
import Logo from "./images/logo.svg"


function MatcheScreen(props) {
const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])


  const getMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/matches')
    .then(response => {
      setMatches(response.data)
      console.log(response)
    })
    .catch(error => {
      console.log(error.massage)
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
        {matches.map((profile => {
          return (
            <div>
              id={profile.id}
              key={profile.id}
              {/* choosePerson={choosePerson} */}
              name={profile.name}
              age={profile.age}
            </div>
          )
        }))}
        {/* <MatcheImage src={matches.photo}/>
        <MatcheName>{matches.name}</MatcheName> */}
        

        {/* <MatcheImage src={'https://i.pinimg.com/564x/6e/b2/8c/6eb28cc1549a19b35283aaca49ecd7bf.jpg'}/>
        <MatcheName>Carolina Danvers</MatcheName>
        <Break/> */}
      </InfoMatches>
      <Break/>
       
    </MatchesConteiner>
  );
}

export default MatcheScreen;
