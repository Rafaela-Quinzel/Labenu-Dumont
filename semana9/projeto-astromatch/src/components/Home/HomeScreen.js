import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { HomeConteiner, ContentScreen,  Header, TitleLogo, 
   GoMathList, AnimationContainer, ProfileConteiner, ImageProfile,
   NameProfile, AgeProfile, BioProfile, Footer, NoMatch, Match } from "./styled"
import ButtonNoMatch from '../images/reject-icon.svg'
import NoMatchEffect from '../images/reject-colorful-icon.svg'
import ButtonMatch from '../images/accept-icon.svg'
import MatchEffect from '../images/accept-colorful-icon.svg'
import MatchList from '../images/match-list.svg'
import Logo from '../images/logo.svg'
import Lottie from 'react-lottie';
import animationData from '../../Animation/animation.json'



function HomeScreen(props) {
  const  [ choose, setChoose ] = useState(true)
  const  [ noChoose, setNoChoose ] = useState(true)
  const [ profiles, setProfiles ] = useState([])
  const [ animationState, setAnimationState ] = useState({
      isStopped: false, isPaused: false
  })

  const onMouseEvent = () => {
    if (choose) {
      setChoose(false)
    } else {
       setChoose(true)
      }
    };

  const onMouseEffect = () => {
    if (noChoose) {
      setNoChoose(false)
    } else {
       setNoChoose(true)
      }
  };

  const iconMatch = choose ? (ButtonMatch) : (MatchEffect);

  const iconNoMatch = noChoose ? (ButtonNoMatch) : (NoMatchEffect);

  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


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

  const chooseProfile = () => {
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
    chooseProfile()
    alert('Perfil adicionado ??? ??? ???')
  }

  useEffect(() => {
    rejectMatch()
  }, [])

  const rejectMatch = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/person')
    .then(response => {
      setProfiles(response.data.profile)
    })
    .catch(error => {
      console.log(error.message)
    })
  }


  return (        
    <HomeConteiner>
      <ContentScreen className='home'>
        <Header>
          <TitleLogo src={Logo}/>
          <GoMathList
            src={MatchList}
            onClick={props.changeScreen}
          />
        </Header>
        <hr/>

        {profiles.length === 0 ? (
          <AnimationContainer>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
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
            <BioProfile>
                {profiles.bio}
            </BioProfile>
          </ProfileConteiner>
        )}

        <Footer>
          <NoMatch
            src={iconNoMatch}
            onClick={rejectMatch} 
            onMouseEnter={onMouseEffect}
            onMouseOut={onMouseEffect}
          />
          <Match
            src={iconMatch}
            onClick={addMatch} 
            onMouseEnter={onMouseEvent}
            onMouseOut={onMouseEvent}
          /> 
        </Footer>
      </ContentScreen>
    </HomeConteiner>
  );
}
export default HomeScreen;
