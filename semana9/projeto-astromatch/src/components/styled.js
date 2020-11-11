import styled from "styled-components"


export const AppConteiner = styled.div`
   background-color: black;
   height: 100%;
   width: 100%;
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
   height: 50vh;
   border-radius: 2%;
   margin-left: 4%;
   display: grid;
`

export const MatchesConteiner = styled.div`
   background-color: white;
   width: 25vw;
   height: 92vh;
   border: 1px solid black;
   margin-top: 2%;
   margin-bottom: 0;
   border-radius: 2%;
   margin-left: 37%;
   text-align: center; 
`

export const HeaderMatches = styled.header`
   display: flex;
   justify-content: space-around;
`

export const ContentScreen = styled.div`
   background-color: white;
   box-shadow: 0 5px 15px 0 rgba(115,118,117,0.80);
   width: 25vw;
   height: 92vh;
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
`

export const BackButton = styled.img`
   width: 9%;
   margin-top: 1vh; 
`

export const TitleLogo = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
   margin-left: 27%;
`

export const LogoMatches = styled.img`
   width: 120px;
   height: 50px;
   padding-top: 2%;
   margin-right: 25%;
`

export const ImageProfile = styled.img`
   width: 22vw;
   height: 60vh;
   border-radius: 2%;
`
export const NameProfile = styled.div`
   position: absolute;
	font-weight: bold;
   font-size: 20px;
   margin-top: 22%;
   margin-left: 1%;
`

export const AgeProfile = styled.div`
   font-size: 14px;
   margin-top: 45vh;
   position: absolute;
   float: right;
`

export const BioProfile = styled.p`
   position: absolute;
   width: 20%;
   margin-top: 10px;
   font-size: 12px;
   margin-left: 1%;
   margin-top: 24%;
`

export const Footer = styled.footer`
   display: flex;
   justify-content: center;
`

export const NoMatch = styled.img`
   width: 12%;
   margin-top: 32%;
   margin-right: 25%;  
`

export const Match = styled.img`
   width: 12%;
   margin-top: 32%; 
`

export const InfoMatches = styled.div`
   text-align: center; 
`

export const MatcheImage = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   border: 1px solid rgba(0, 0, 0, 0.267);
`

export const MatcheName = styled.p`
   font-size: 14px;
   color: purple;
   float: right;
   margin-right: 35%;

`

export const Break = styled.hr`
   width: 95%;
   height: 1px;
   background: linear-gradient(to right, #E783FD, #83D5FF); 
`