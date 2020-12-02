import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite, mainDarkGray } from '../../constants/colors'



// styled CardFeed
export const CardContainer = styled.div`
   cursor: pointer;
   display: grid;
   justify-content: center;
   margin-top: 2%;
   &:hover{
      transform: scale(1.1);
      /* background-color: rgb(247, 229, 210); */
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
   height: 18vh;
   margin: 4%;
`

export const CardContent = styled.div`
   width: 30vw;
   height: 10vh;
   margin: 4% 8%;
   word-wrap: break-word;
`

// export const FooterFeed = styled.div`
//    border-top: 1px solid ${mainLightGray};
//    display: flex;
//    height: 4vh;
//    /* justify-content: space-between; */
// `

// export const ButtonVote = styled.span`
//    font-size: 30px;
//    margin: 0.4% 2%;
 
// `

// export const Comments = styled.span`
//   margin-left: 45%;
// `

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