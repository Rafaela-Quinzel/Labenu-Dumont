import React from 'react'
import { FeedContainer } from './styled'
import CardPost from '../../../components/CardFeed/CardFeed'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'


function FeedPostsPage() {
    
  useProtectPage() //Proteção da página

  useRequestData()

  const getPosts = useRequestData(`${BASE_URL}posts`, {})

  console.log(getPosts)

  return (
    <FeedContainer>
      {getPosts && getPosts.posts && getPosts.posts.map((item) => {
        return (
          <CardPost id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} commentsCount={item.commentsCount} />
        )
      })}
    </FeedContainer>
  );
}

export default FeedPostsPage;