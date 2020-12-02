import React from 'react'
import { CardContainer, Post, CreateContent, NameUserPost, PostCardContainer,
    HeaderPost, FooterPost, CardContent, ButtonVote, Comments, AddComment, CreatePost, AddPost } from './styled'


function CardPost(props) {
  return (
    <CardContainer>
            <PostCardContainer>
        <HeaderPost>
            <NameUserPost>{props.username}</NameUserPost>
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
      </PostCardContainer> 
    </CardContainer>
  );
}
export default CardPost