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

  // console.log(details)


  return (
    <PostsContainer>
      <CardPost/>
    </PostsContainer>
  );
}

export default DetailsPostsPage;