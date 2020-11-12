import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {MatchesConteiner, HeaderMatches, BackButton, LogoMatches, DeleteMatch , MatcheImage, MatcheName, MathesProfiles, InfoMatches } from "./styled"
import Back from './images/back.svg'
import Logo from './images/logo.svg'
import Heart from './images/heart.svg'
import DeleteButton from './images/delete-user.svg'
import Lottie from 'react-lottie';
import animationData from './animation.json'


function MatcheScreen(props) {
const [listMatches, setListMatches] = useState([])
const [animationState, setAnimationState] = useState({
  isStopped: false, isPaused: false
 })

  useEffect(() => {
    getMatches()
  }, [])


  const getMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/matches')
    .then(response => {
      setListMatches(response.data.matches)
      console.log(response)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const clearListMatches = () => {
       if(window.confirm('Você tem certeza que deseja deletar todos?'))
      axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rafaela/clear')
      .then(() => {
        alert('Matches deletados!')
        getMatches()
      })
      .catch((error) => {
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
    <MatchesConteiner>

      <HeaderMatches>
        <BackButton src={Back} onClick={props.changeScreen}/>
        <LogoMatches src={Logo}/>
        <DeleteMatch  src={DeleteButton} onClick={clearListMatches}/>
      </HeaderMatches>
      <hr/>

      {listMatches.length === 0 &&
         <div>
        <Lottie options={defaultOptions}
              height={300}
              width={300}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
         </div>
         }
      
      <MathesProfiles>
      {listMatches.map((profile => {
          return (
            <InfoMatches key={profile.id} >
            <MatcheImage src={profile.photo}/>
            <MatcheName>{profile.name}</MatcheName>
              {/* <Break/> */}
            </InfoMatches>
          )
        }))}
        </MathesProfiles>
      
  </MatchesConteiner>
)
}
export default MatcheScreen;
