import React from 'react'
import { useHistory } from 'react-router-dom'
// import { useProtectPage } from '../../hooks/useProtectPage'
import { CardContainer, FeedCardContainer, Image, TextPost, NumberVotes, NumberComments, IconComents,
  HeaderFeed, CardContent, TitlePost, NameUserPost, FooterFeed, IconVotesPost, FeedCotainer } from './styled'
import { goToDetailsPostsPage } from '../../routes/coordinator'
import ImageLogo from '../../assets/astronauta.svg'
import IconVotes from '../../assets/votes.svg'
import ComentIcon from '../../assets/coments.svg'
import CreateComment from '../../components/CreateComment/CreateComment'


function CardFeed(props) {

  // useProtectPage() //Proteção da página dando erro

  const history = useHistory()


  return (
    <>
      <CardContainer onClick={() => goToDetailsPostsPage(history, props.id)}>
        <FeedCardContainer>
          <HeaderFeed>
            <Image src={ImageLogo} alt={ImageLogo}/>
            <NameUserPost>{props.username}</NameUserPost>
          </HeaderFeed>
            <CardContent>
              <TitlePost>{props.title}</TitlePost>
              <TextPost>{props.text}</TextPost>
              </CardContent>
              <FooterFeed>
                <NumberVotes>{props.votesCount}</NumberVotes>
                <IconVotesPost src={IconVotes} alt={IconVotes}/>
                <NumberComments>
                    {props.commentsCount}
                  </NumberComments>
                  <IconComents 
                    // onClick={onClickComment}
                    src={ComentIcon} 
                    alt={ComentIcon}
                  />
            </FooterFeed>
        </FeedCardContainer>
      </CardContainer>
      <CreateComment id={props.id}/>
    </>
  );
}

export default CardFeed