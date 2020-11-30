import React from 'react'
import { CardContainer, Post, CreateContent, 
    HeaderPost, FooterPost, CardContent, ButtonVote, Comments, AddComment } from './styled'




function CardPost() {
  return (
    <CardContainer>
        <Post>
            <HeaderPost>
               <p>Nome de usuário</p>
            </HeaderPost>
            <CardContent>
               <p>Texto post</p>
            </CardContent>
            <FooterPost>
                <ButtonVote> ⬆ </ButtonVote>
                  0
                <ButtonVote> ⬇ </ButtonVote>
                <Comments> 
                    0 comentários
                </Comments>
            </FooterPost>
        </Post>
        <Post>
            <CreateContent>
                <p>Escreva seu Comentário</p>
            </CreateContent>
            <AddComment>
                Comentar
            </AddComment>
        </Post>
    </CardContainer>
  );
}

export default CardPost