import React from 'react'
import { useHistory } from 'react-router-dom'
import { useProtectPage } from '../../hooks/useProtectPage'
import { CardContainer, FeedCardContainer, Image,
  HeaderFeed, FooterFeed, CardContent, TitlePost, Comments, NameUserPost } from './styled'
import { goToDetailsPostPage } from '../../routes/coordinator'
import ImageLogo from '../../assets/astronauta.svg'

function CardFeed(props) {

  useProtectPage() //Proteção da página

  const history = useHistory()

  return (
    <CardContainer onClick={() => goToDetailsPostPage(history, props.id)}>
      
      <FeedCardContainer>
        <HeaderFeed>
            <Image src={ImageLogo} alt={ImageLogo}/>
            <NameUserPost>{props.username}</NameUserPost>
        </HeaderFeed>
          <CardContent>
            <TitlePost>{props.title}</TitlePost>
            {/* <p>{props.text}</p> */}
          </CardContent>
        {/* <FooterFeed>
          <ButtonVote> ⬆ </ButtonVote>
            <p>{props.votesCount}</p>
          <ButtonVote> ⬇ </ButtonVote>
          <Comments> 
            <p>{props.commentsCount} comentários</p>
          </Comments>
        </FooterFeed> */}
      </FeedCardContainer>
    </CardContainer>
  );
}

export default CardFeed