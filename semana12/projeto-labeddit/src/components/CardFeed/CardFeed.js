import React from 'react'
import { CardContainer, CreatePost, CreateContent, 
  HeaderPost, FooterPost, CardContent, ButtonVote, Comments, AddPost } from './styled'



function CardFeed() {
  return (
    <CardContainer>
        <CreatePost>
          <CreateContent>
              <p>Escreva seu post</p>
          </CreateContent>
          <AddPost>
               Postar
          </AddPost>
        </CreatePost>

        <CreatePost>
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
        </CreatePost>
    </CardContainer>
  );
}

export default CardFeed