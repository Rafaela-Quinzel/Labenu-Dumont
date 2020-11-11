import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {HomeConteiner, ImageProfile, Header, NoMatch, Match, NameProfile, AgeProfile, BioProfile, ContentScreen, MatchesButton, ProfileTitle, TitleLogo, Footer, ProfileConteiner} from "./styled"
import ButtonNoMatch from "./images/iconnomatch.svg"
import ButtonMatch from "./images/iconheartmatch.svg"
import Back from "./images/back.svg"
import Matchs from "./images/matchs.svg"
import Logo from "./images/logo.svg"


function HomeScreen() {
   const [infoProfiles, setInfoProfiles] = useState([])
  // const [matche, setMatche] = useState([])


   useEffect(() => {
     getProfiles()
   }, [])

   const getProfiles = () => {
     axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
     .then(response => {
       setInfoProfiles(response.data.profile)
      })
      .catch(error => {
        console.log(error)
      })
   }

//   const choosePerson = (id, response) => {
//     const body = {
//       id: id,
//       choice: matche
//     }
//    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/choose-person')
//    .then((answer) => {
//      setMatche(response.data)
//      console.log(matche)
//    })
//    .catch(error => {
//      console.log(error)
//    })
//  }


  return (        
    <HomeConteiner>

      <ContentScreen>
        <Header>
            <TitleLogo src={Logo}/>
            <MatchesButton src={Matchs}/>
        </Header>
        <hr/>

        <ProfileConteiner key={infoProfiles.id}>
          <ImageProfile src={infoProfiles.photo}/>
          {/* <ProfileTitle> */}
          <NameProfile>{infoProfiles.name},  </NameProfile>
          <AgeProfile> {infoProfiles.age} anos</AgeProfile>
          {/* </ProfileTitle> */}
          <BioProfile>{infoProfiles.bio}</BioProfile>
        </ProfileConteiner>

        <Footer>
          <NoMatch src={ButtonNoMatch}/>
          <Match src={ButtonMatch} /> 
          {/* onClick={choosePerson} */}
        </Footer>
      </ContentScreen>

    </HomeConteiner>
  );
}

export default HomeScreen;
