import React from 'react'
import {MatchsConteiner, Header, MatchsButton, BackButton, TitleLogo} from "./styled"
import Matchs from "./images/matchs.svg"
import Back from "./images/back.svg"
import Logo from "./images/logo.svg"


function MatchScreen() {
  return (        
    <MatchsConteiner>
      <Header>
       <MatchsButton src={Back}/>
        {/* <TitleLogo>astromatch</TitleLogo> */}
        <TitleLogo src={Logo}/>
        <BackButton src={Matchs}/>
      </Header>
       <hr/>
    
    </MatchsConteiner>
  );
}

export default MatchScreen;
