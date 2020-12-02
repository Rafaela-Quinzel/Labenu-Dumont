import React from 'react'
import axios from 'axios'
import { CardContainer, CreatePost, CreateContent, 
  HeaderPost, FooterPost, CardContent, ButtonVote, Comments, AddPost } from './styled'
 

function CardFeed(props) {



  return (
    <CardContainer key={props.id}>
        {/* <CreatePost>
          <CreateContent>
              <p>Escreva seu post</p>
          </CreateContent>
          <AddPost>
               Postar
          </AddPost>
        </CreatePost> */}

        <CreatePost>
            <HeaderPost>
               <p>{props.username}</p>
            </HeaderPost>
            <CardContent>
              <p>{props.title}</p>
              <p>{props.text}</p>
            </CardContent>
            <FooterPost>
                <ButtonVote> ⬆ </ButtonVote>
                   <p>{props.votesCount}</p>
                <ButtonVote> ⬇ </ButtonVote>
                <Comments> 
                   <p>{props.commentsCount} comentários</p>
                </Comments>
            </FooterPost>
        </CreatePost>
    </CardContainer>
  );
}

export default CardFeed