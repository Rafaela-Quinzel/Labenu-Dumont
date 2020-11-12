import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {HomeConteiner, ImageProfile, Header, NoMatch, Match, NameProfile, AgeProfile, BioProfile, ContentScreen, MatchesButton, AnimationContainer, TitleLogo, Footer, ProfileConteiner, HeartCarry} from "./styled"
import ButtonNoMatch from './images/iconnomatch.svg'
import ButtonMatch from './images/iconheartmatch.svg'
import Matchs from './images/matchs.svg'
import Logo from './images/logo.svg'
import Lottie from 'react-lottie';
import animationData from './animation.json'



function HomeScreen(props) {
   const [profiles, setProfiles] = useState([])
   const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
   })
   
   useEffect(() => {
     getProfiles()
   }, [])

   const getProfiles = () => {
     axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
     .then(response => {
       setProfiles(response.data.profile)
      })
      .catch(error => {
        console.log(error.message)
      })
   }

  const choosePerson = () => {
    const body = {
      id: profiles.id,
      choice: true
    }
   axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/choose-person',
     body
     )
   .then(() => {
     getProfiles()
   })
   .catch(error => {
     console.log(error.message)
   })
 }

 const addMatch = () => {
     choosePerson()
     alert('Perfil adicionado ♥')
 }

 useEffect(() => {
  refuseMatch()
}, [])

 const refuseMatch = () => {
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
  .then(response => {
    setProfiles(response.data.profile)
   })
   .catch(error => {
     console.log(error.message)
   })
}

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


  return (        
    <HomeConteiner>
    
      <ContentScreen>
        <Header>
            <TitleLogo src={Logo}/>
            <MatchesButton src={Matchs} onClick={props.changeScreen}/>
        </Header>
        <hr/>

        {profiles.length === 0 ? (
         <AnimationContainer>
        <Lottie options={defaultOptions}
              height={300}
              width={300}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
         </AnimationContainer>
        ) : (
        <ProfileConteiner key={profiles.id}>
          <ImageProfile src={profiles.photo}/>

          <NameProfile fontSize={24}>
            {profiles.name}, 
            <AgeProfile>
              {profiles.age} anos
            </AgeProfile>
          </NameProfile>
          <BioProfile>{profiles.bio}</BioProfile>
        </ProfileConteiner>
      )}

        <Footer>
          <NoMatch src={ButtonNoMatch} onClick={refuseMatch}/>
          <Match src={ButtonMatch} onClick={addMatch}/> 
        </Footer>
       
      </ContentScreen>
   
    </HomeConteiner>
  );
}
export default HomeScreen;
