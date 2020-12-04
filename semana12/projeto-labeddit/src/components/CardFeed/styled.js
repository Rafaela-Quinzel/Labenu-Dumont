import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite, mainDarkGray } from '../../constants/colors'



// styled CardFeed
export const CardContainer = styled.div`
   cursor: pointer;
   display: grid;
   align-items: center;
   box-shadow: 0px 0px 1em #666;
   -webkit-box-shadow: 5px 0px 1em #666;
   -moz-box-shadow: 0px 0px 1em #666;
   &:hover{
      transform: scale(1.1);
   }
`

export const HeaderFeed = styled.div`
   border-bottom: 1px solid ${mainLightGray};
   display: flex;
   justify-content: center;
   padding-bottom: 2%;
   width: 35vw;
   height: 6vh;
`

export const FeedCardContainer = styled.div`
   border: 1px solid ${mainLightGray};
   background-color: ${mainAntiquewhite};
   text-align: center;
   border-radius: 12px;
   width: 35vw;
   height: 50vh;
   margin: 5%;
   &:hover{
      background-color: rgb(247, 229, 210);
   }
`

export const CardContent = styled.div`
   width: 30vw;
   height: 32vh;
   margin: 2% 5%;
   word-wrap: break-word;
   text-align: center;
   overflow: auto;
`

export const NameUserPost = styled.h2`
   color: ${mainDarkPurple};
`

export const Image = styled.img`
  width: 30px;
  margin-top: 4%;
  margin-right: 2%;
`

export const TitlePost = styled.h3`
   color: ${mainDarkGray};
`

export const FooterFeed = styled.div`
   border-top: 1px solid ${mainLightGray};
   
`

export const IconVotesPost = styled.img`
   width: 28px;
`

export const TextPost = styled.p`
   color: ${mainDarkGray};
   margin: 5% 2%;
`

export const NumberVotes = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-right: 1%;
`

export const NumberComments = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-bottom: 10%;
  margin-left: 50%;
`

export const IconComents = styled.img`
   width: 28px;
   margin-left: 2%;
   margin-top: 4%;
`