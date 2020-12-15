import styled from 'styled-components'
import { mainLightGray, mainDarkPurple, mainAntiquewhite, mainDarkGray, mainGray } from '../../constants/colors'


// styled CardPost
export const CardContainer = styled.div`
   display: grid;
   justify-content: center;
   margin-top: 4%;
`

export const HeaderPost = styled.div`
   text-align:  center;
   border-bottom: 1px solid ${mainLightGray};
   width: 40vw;
   height: 4vh;
`

export const PostCardContainer  = styled.div`
   background-color: ${mainAntiquewhite};
   border: 1px solid ${mainLightGray};
   border-radius: 12px;
   width: 40vw;
   height: 34vh;
   margin: 2%;
`

export const CardContent = styled.div`
   width: 38vw;
   height: 16vh;
   margin: 2% 2%;
   word-wrap: break-word;
`

export const FooterPost = styled.div`
   border-top: 1px solid ${mainLightGray};
   display: flex;
`

export const ButtonVote = styled.div`
   color: ${mainDarkPurple};
   font-size: 30px;
   margin: 1% 4% 0% 4%;
   &:hover{
      transform: scale(1.2);
   }
`

export const NumberVotes = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-top: 2%;
`

export const IconButtonVote =  styled.img`
   width: 25px;
`

export const AddComment = styled.p`
   border-top: 1px solid black;
`

export const CommentsConteiner = styled.span`
   display: flex;
   margin-left: 55%;
`

export const NumberComments = styled.span`
  color: ${mainDarkPurple};
  font-weight: bolder;
  margin-right: 15%;
  margin-top: 30%;
`

export const IconComents = styled.img`
   width: 25px;
   margin-left: 10%;
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

export const TextPost = styled.p`
   color: ${mainDarkGray};
   margin: 5% 2%;
`
