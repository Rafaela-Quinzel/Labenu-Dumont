import React from 'react'
import { useHistory } from 'react-router-dom'
// import { useProtectPage } from '../../hooks/useProtectPage'
import { CardContainer, FeedCardContainer, Image,
  HeaderFeed, CardContent, TitlePost, NameUserPost } from './styled'
import { goToDetailsPostsPage } from '../../routes/coordinator'
import ImageLogo from '../../assets/astronauta.svg'

function CardFeed(props) {

  // useProtectPage() //Proteção da página dando erro

  const history = useHistory()


  return (
    <CardContainer onClick={() => goToDetailsPostsPage(history, props.id)}>
      <FeedCardContainer>
        <HeaderFeed>
          <Image src={ImageLogo} alt={ImageLogo}/>
          <NameUserPost>{props.username}</NameUserPost>
        </HeaderFeed>
          <CardContent>
            <TitlePost>{props.title}</TitlePost>
          </CardContent>
      </FeedCardContainer>
    </CardContainer>
  );
}

export default CardFeed