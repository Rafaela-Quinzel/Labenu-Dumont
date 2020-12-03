import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite } from '../../constants/colors'

// styled CardPost
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

export const HeaderPost = styled.div`
   text-align:  center;
   border-bottom: 1px solid ${mainLightGray};
   width: 30vw;
   height: 4vh;
`

export const PostCardContainer  = styled.div`
   border: 1px solid ${mainLightGray};
   border-radius: 12px;
   width: 30vw;
   height: 40vh;
   margin: 4%;
`

export const CardContent = styled.div`
   background-color: ${mainAntiquewhite};
   width: 29vw;
   height: 25vh;
   margin: 2% 2%;
   word-wrap: break-word;
`

export const FooterPost = styled.div`
   border-top: 1px solid ${mainLightGray};
   display: flex;
   height: 4vh;
`

export const ButtonVote = styled.span`
   font-size: 30px;
   margin: 0.4% 2%;
`

export const AddComment = styled.p`
   border-top: 1px solid black;
`

export const Comments = styled.span`
  margin-left: 45%;
`

export const AddPost = styled.p`
   border-top: 1px solid black;
`

export const CreatePost = styled.div`
   border: 1px solid black;
   width: 30vw;
   height: 32vh;
   margin: 2%;
`

export const NameUserPost = styled.h3`
   color: ${mainDarkPurple};
   
`
