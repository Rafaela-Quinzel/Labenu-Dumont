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

export const ContentScreen = styled.div`
   background-color: white;
   box-shadow: 0 5px 15px 0 rgba(115,118,117,0.80);
   width: 24vw;
   height: 90vh;
   border: 1px solid black;
   margin-top: 2%;
   margin-bottom: 0;
   border-radius: 2%; 
`

export const MatchsConteiner = styled.div`
   background-color: white;
   width: 24vw;
   height: 90vh;
   border: 1px solid black;
   margin-top: 2%;
   margin-bottom: 0;
   border-radius: 2%;
   margin-left: 38%; 
`

export const Header = styled.div`
   display: flex;
   justify-content: space-around;
`

export const MatchsButton = styled.img`
   width: 8%;
   margin-top: 2vh;
`

export const BackButton = styled.img`
   width: 8%;
   margin-top: 2vh;
`

export const TitleLogo = styled.img`
   width: 100px;
   height: 50px;
   padding-top: 2%;
`

export const MainConteiner = styled.main`
   box-shadow: 0 5px 15px 0 rgba(117,117,117,0.77);
   width: 22vw;
   height: 50vh;
   border-radius: 2%;
   margin-left: 4%;
   display: grid;
`

// export const UserData = styled.div`
//    /* box-shadow: -30px 30px 20px rgba(0,0,0,0.3); */
//    background-color: black;
// `


export const ImageUser = styled.img`
   width: 22vw;
   height: 60vh;
   border-radius: 2%;
`

export const UserName = styled.div`
   color: white;
   text-shadow: 2px 1px 1px black;
	font-weight: bold;
   font-size: 20px;
   margin-left: 1%;
   position: absolute;
   margin-top: 22%;
`

export const UserAge = styled.div`
   color: white;
   text-shadow: 2px 1px 1px black;
   font-size: 18px;
   margin-left: 13%;
   position: absolute;
   margin-top: 22%;
`

export const UserDescription = styled.p`
   color: white;
   text-shadow: 2px 1px 1px black;
   margin-top: 10px;
   font-size: 14px;
   position: absolute;
   margin-left: 3%;
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

export const ProfileConteiner = styled.main`
   text-align: center; 
`

export const ProfileImage = styled.img`
   width: 50px;
   border-radius: 100%;
   border: 1px solid rgba(0, 0, 0, 0.267);
`

export const ProfileName = styled.p`
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