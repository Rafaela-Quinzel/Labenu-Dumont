import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {HomeConteiner, ImageProfile, Header, NoMatch, Match, NameProfile, AgeProfile, BioProfile, ContentScreen, MatchesButton, ProfileTitle, TitleLogo, Footer, ProfileConteiner} from "./styled"
import ButtonNoMatch from "./images/iconnomatch.svg"
import ButtonMatch from "./images/iconheartmatch.svg"
import Back from "./images/back.svg"
import Matchs from "./images/matchs.svg"
import Logo from "./images/logo.svg"
import MatcheScreen from './MatcheScreen'


function HomeScreen(props) {
   const [infoProfiles, setInfoProfiles] = useState([])
   
  //  const [matche, setMatche] = useState("")


   useEffect(() => {
     getProfiles()
   }, [])

   const getProfiles = () => {
     axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
     .then(response => {
       setInfoProfiles(response.data.profile)
      })
      .catch(error => {
        console.log(error.massage)
      })
   }

  const choosePerson = () => {
    const body = {
      id: infoProfiles.id,
      choice: true
    }
   axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/choose-person',
     body
     )
   .then((response) => {
     getProfiles()
     console.log(response, 'OK')
   })
   .catch(error => {
     console.log(error.message)
   })
 }

 const addMatch = () => {
     choosePerson()
     console.log('ok')
 }


  return (        
    <HomeConteiner>

      <ContentScreen>
        <Header>
            <TitleLogo src={Logo}/>
            <MatchesButton src={Matchs} onClick={props.showMatches}/>
        </Header>
        <hr/>
         
        <ProfileConteiner key={infoProfiles.id}>
          <ImageProfile src={infoProfiles.photo}/>
          {/* <ProfileTitle> */}
          <NameProfile>{infoProfiles.name}, {infoProfiles.age} anos</NameProfile>
          {/* <AgeProfile> {infoProfiles.age} anos</AgeProfile> */}
          {/* </ProfileTitle> */}
          <BioProfile>{infoProfiles.bio}</BioProfile>
        </ProfileConteiner>

        <Footer>
          <NoMatch src={ButtonNoMatch}/>
          <Match src={ButtonMatch} onClick={addMatch}/> 
          
        </Footer>
      </ContentScreen>

    </HomeConteiner>
  );
}

export default HomeScreen;
