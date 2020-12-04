import React, { useState } from 'react'
import { CardContainer, NameUserPost, PostCardContainer,HeaderPost, CommentsConteiner, NumberVotes,
  FooterPost, CardContent, ButtonVote, NumberComments, AddComment, TextPost, IconButtonVote, IconComents } from './styled'
import VoteUp from '../../assets/voteup.svg'
import VoteDown from '../../assets/votedown.svg'
import ComentIcon from '../../assets/coments.svg'
import CreateComment from '../CreateComment/CreateComment'


function CardPost(props) {
//   const [comment, setComment] = useState(false)
//     const [comentarios, setComentarios] = useState([])
//     const [numeroComentarios, setNumeroComentarios] = useState(0)

//     const onClickComment = () => {
//       setComment(!comment)
//     };

    
// const addComment = (comment) => {
//   const listaDeComentarios = [...comentarios, comment]

//   setComentarios(listaDeComentarios)
//   setComment(false)
//   setNumeroComentarios(numeroComentarios + 1)
// }

//     const boxComment = comment ? (
//       <CreateComment enviarComentario={addComment}/>
//     ) : (
//       comentarios.map(comentario => {
//         return (
//           <div>
//             <p>{comentario}</p>
//           </div>
//         )
//       })
//     )

// const handleVote = (decision) => {
//   const body = {
//       direction: decision,
//   }
//   votePost(body, props.id, props.update)
//  }

// const arrow = () => {
//   if (props.direction === 0) {
//       return (<>
//           <Arrow src={greyUp} onClick={() => handleVote(1)} />
//           <Heading size="md">{props.votesCount}</Heading>
//           <Arrow src={greyDown} onClick={() => handleVote(-1)} />
//       </>)
//   } else if (props.direction === 1) {
//       return (<>
//           <Arrow src={coloredUp} onClick={() => handleVote(0)} />
//           <Heading size="md">{props.votesCount}</Heading>
//           <Arrow src={greyDown} onClick={() => handleVote(-1)} />
//       </>)
//   } else {
//       return (<>
//           <Arrow src={greyUp} onClick={() => handleVote(1)} />
//           <Heading size="md">{props.votesCount}</Heading>
//           <Arrow src={coloredDown} onClick={() => handleVote(0)} />
//       </>)
//   }
// }


  return (
    <div>
    <CardContainer>
      <PostCardContainer>
        <HeaderPost>
          <NameUserPost>
            {props.username}
          </NameUserPost>
        </HeaderPost>
          <CardContent>
            <p>{props.title}</p>
            <TextPost>{props.text}</TextPost>
          </CardContent>
        <FooterPost>
          <ButtonVote>
            <IconButtonVote 
              src={VoteUp} 
              alt={VoteUp}
            />
          </ButtonVote>
            <NumberVotes>{props.votesCount}</NumberVotes>
          <ButtonVote>
            <IconButtonVote 
              src={VoteDown} 
              alt={VoteDown}
            />
          </ButtonVote>
          <CommentsConteiner>
            <NumberComments>
              {props.commentsCount}
            </NumberComments>
          <IconComents 
              // onClick={boxComment}
              src={ComentIcon} 
              alt={ComentIcon}
            />
          </CommentsConteiner>
        </FooterPost>
      </PostCardContainer> 
    </CardContainer>
    <CreateComment id={props.id}/>
    </div>
  );
}
export default CardPost