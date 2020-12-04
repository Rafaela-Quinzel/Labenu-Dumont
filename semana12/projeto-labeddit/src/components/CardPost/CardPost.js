import React, { useState } from 'react'
import axios from 'axios'
import { CardContainer, NameUserPost, PostCardContainer,HeaderPost, CommentsConteiner, NumberVotes,
  FooterPost, CardContent, ButtonVote,TextPost, IconButtonVote } from './styled'
import ButtonVoteUp from '../../assets/voteup.svg'
import ButtonVoteDown from '../../assets/votedown.svg'



function CardPost(props) {

  const VoteUp = () => {
    let body = {}
    if(props.direction === 1) {
        body = {
            "direction": 0
        }
    } else {
        body = {
            "direction": 1
        }
    }
    const token = localStorage.getItem("token")
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/comment/${props.id}/vote`,body, {
        headers: {
            Authorization: token
        }
    }).then(() => {
      alert('Voto enviado com sucesso! 🧡🧡🧡')
    }).catch((error)=>{
        console.log(error)
    }) 
  }

  const VoteDown = () => {
    let body = {}
    if(props.direction === -1) {
        body = {
            "direction": 0
        }
    } else {
        body = {
            "direction": 1
        }
    }
    const token = localStorage.getItem("token")
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${props.id}/comment/${props.id}/vote`,body, {
        headers: {
            Authorization: token
        }
    }).then(() => {
      alert('Voto retirado com sucesso!')
    }).catch((error)=>{
        console.log(error)
    })
  }


  
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
                onClick={VoteUp}
                src={ButtonVoteUp} 
                alt={ButtonVoteUp}
              />
            </ButtonVote>
              <NumberVotes>{props.votesCount}</NumberVotes>
            <ButtonVote>
              <IconButtonVote
                onClick={VoteDown} 
                src={ButtonVoteDown} 
                alt={ButtonVoteDown}
              />
            </ButtonVote>
            <CommentsConteiner>
            </CommentsConteiner>
          </FooterPost>
        </PostCardContainer> 
      </CardContainer>
      {/* {fieldComment} */}
      
    </div>
  );
}
export default CardPost