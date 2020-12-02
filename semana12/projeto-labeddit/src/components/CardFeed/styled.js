import styled from 'styled-components'


export const CardContainer = styled.div`
   display: grid;
   justify-content: center;
   margin-top: 2%;
`

export const CreatePost = styled.div`
   border: 1px solid black;
   width: 30vw;
   height: 32vh;
   margin: 2%;
`

export const CreateContent = styled.div`
   width: 35vw;
   height: 22vh;
   word-wrap: break-word;
`

export const CardContent = styled.div`
   width: 30vw;
   height: 19vh;
   margin: 1%;
   word-wrap: break-word;
`

export const HeaderPost = styled.div`
   text-align:  center;
   border-bottom: 1px solid black;
   padding-bottom: 15px;
   width: 30vw;
   height: 8px;
`

export const FooterPost = styled.div`
   border-top: 1px solid black;
   display: flex;
   /* justify-content: space-between; */
`

export const AddPost = styled.p`
   border-top: 1px solid black;
`

export const ButtonVote = styled.span`
   font-size: 30px;
   margin: 0.2% 2%;
 
`

export const Comments = styled.span`
  margin-left: 45%;
`