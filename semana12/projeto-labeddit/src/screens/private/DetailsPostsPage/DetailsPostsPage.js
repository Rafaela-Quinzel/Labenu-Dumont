import React from 'react'
import { PostsContainer } from './styled'
import { useParams } from 'react-router-dom'
import  CardPost from '../../../components/CardPost/CardPost'
import { useProtectPage } from '../../../hooks/useProtectPage';
import { useRequestData } from  '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'


function DetailsPostsPage() {
  
  useProtectPage() //Proteção da página

  const params = useParams()
  

  const data = useRequestData(`${BASE_URL}/posts/${params.id}`, {}) //[]
  // const post = data[0]

  console.log(data)


  return (
    <PostsContainer>
      {data && data.posts && data.posts.map((item) => {
        return (
          <CardPost
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
    </PostsContainer>
  );
}

export default DetailsPostsPage;