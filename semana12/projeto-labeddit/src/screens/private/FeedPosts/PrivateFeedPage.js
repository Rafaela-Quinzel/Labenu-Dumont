import React from 'react'
import { FeedContainer } from './styled'
import CardPost from '../../../components/CardFeed/CardFeed'
import { useProtectPage } from '../../../hooks/useProtectPage'
import { useRequestData } from '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
// import { useUnProtectPage } from '../../../hooks/useUnProtectPage'


function FeedPostsPage() {
    
  // useProtectPage() //Proteção da página

  useRequestData()

  const data = useRequestData(`${BASE_URL}/posts`, undefined)

  // useUnProtectPage() //Se já tem token cadastrado, vai entrar direto no feed


  return (
    <FeedContainer>
      <CardPost/>
      {!data ? <div>Loading</div> : data.posts.map((item) => {
        return <CardPost id={item.id} title={item.title} text={item.text} username={item.username} votesCount={item.votesCount} commentsCount={item.commentsCount} />
      })

      }
    </FeedContainer>
  );
}

export default FeedPostsPage;