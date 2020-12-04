import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FeedContainer, FabStyled, TitlePage  } from './styled'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import CardFeed from '../../../components/CardFeed/CardFeed'
import { goToCreatePost } from '../../../routes/coordinator'
import CardComment from '../../../components/CardComment/CardComment'


function FeedPostsPage() {
    
  useProtectPage() //Proteção da página

  useRequestData()

  const params = useParams()

  const history = useHistory()

  const getPosts = useRequestData(`${BASE_URL}/posts`, {})


  return (
    <FeedContainer>
      <TitlePage>Feeds</TitlePage>
      {getPosts && getPosts.posts && getPosts.posts.map((item) => {
        return (
          <CardFeed
            key={item.id} 
            id={item.id} 
            title={item.title} 
            text={item.text} 
            username={item.username} 
            votesCount={item.votesCount} 
            commentsCount={item.commentsCount} 
          />
        )
      })}
      <FabStyled color='secondary' onClick={() => goToCreatePost(history)}>
        ➕
      </FabStyled>

    </FeedContainer>
  );
}
export default FeedPostsPage;