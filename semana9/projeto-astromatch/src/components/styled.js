import styled from "styled-components"
import Heart from './images/heart.svg'


export const AppConteiner = styled.div`
   background-color: black;
   height: 100vh;
   width: 100vw;
   margin: 0;
   position: absolute;
`

export const HomeConteiner = styled.div`
   height: 100%; 
   display: flex;
   justify-content: center;
   align-items: center;
`

export const ProfileConteiner = styled.main`
   box-shadow: 0 5px 15px 0 rgba(117,117,117,0.77);
   color: white;
   text-shadow: 2px 1px 1px black;
   width: 22vw;
   max-height: 64vh;
   border-radius: 2%;
   margin-left: 6%;
   margin-top: 5%;
   display: flex;
`

export const MatchesConteiner = styled.div`
   background-color: white;
   width: 25vw;
   height: 95vh;
   border: 1px solid black;
   margin-top: 2%;
   margin-bottom: 0;
   border-radius: 2%;
   margin-left: 37%;
   text-align: center;
   aside {
     overflow: auto;
   } 
`
export const AnimationContainer = styled.div`
   width: 25vw;
   margin-top: 20%;
   margin-bottom: 14.1%;
`

export const HeaderMatches = styled.header`
   display: flex;
   justify-content: space-around;
`

export const ContentScreen = styled.div`
   background-color: white;
   box-shadow: 0 5px 15px 0 rgba(115,118,117,0.80);
   max-width: 25vw;
   height: 95vh;
   border: 1px solid black;
   margin-bottom: 0;
   border-radius: 2%; 
`

export const Header = styled.div`
   display: flex;
   justify-content: space-around;
`

export const MatchesButton = styled.img`
   width: 9%;
   cursor: pointer;
   &:hover {
      transform: scale(1.2);
   }
`

export const BackButton = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.2);
   }
   width: 9%;
   margin-top: 1vh; 
`

export const TitleLogo = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
   margin-left: 27%;
`

export const HeartCarry = styled.img`
   width: 10%;
   transform: scale(1.2);
`

export const LogoMatches = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
  
`

export const MathesProfiles = styled.div`
   height: 80vh;
   overflow: auto;
`

export const ImageProfile = styled.img`
   width: 22vw;
   height: 64vh;
   border-radius: 2%;
`
export const NameProfile = styled.h1`
   position: absolute;
   font-size: ${props => `${props.fontSize}px`};
   margin-top: 21.4%;
   margin-left: 1%;
   white-space: nowrap;
`

export const AgeProfile = styled.span`
   font-size: 16px;
   margin-top: 21%;
   margin-left: 4%;
`

export const BioProfile = styled.p`
   position: absolute;
   width: 21%;
   height: 2%;
   margin-top: 10px;
   font-size: 15px;
   margin-left: 1%;
   margin-top: 24%;
`

export const Footer = styled.footer`
   display: flex;
   justify-content: center;
`

export const NoMatch = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   width: 12%;
   margin-top: 12%;
   margin-right: 20%;
`

export const Match = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.3);
   }
   width: 12%;
   margin-top: 12%;
`

export const InfoMatches = styled.div`
   background: linear-gradient(to right, #e783fd6e, #83d6ff62);
   display: flex;
   justify-content: flex-start;
   border-radius: 10px;
   margin: 4%;
   max-height: 92vh;
`

export const MatcheImage = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.267);
   margin: 2% 5%;
`

export const MatcheName = styled.p`
   font-size: 16px;
   color: purple;
`

export const DeleteMatch = styled.img`
   cursor: pointer;
   &:hover {
      transform: scale(1.2);
   }
   width: 32px;
   margin-top: 2%;
`

// export const Break = styled.hr`
//    width: 95%;
//    height: 1px;
//    background: linear-gradient(to right, #E783FD, #83D5FF);
//    margin-bottom: 4%; 
// `