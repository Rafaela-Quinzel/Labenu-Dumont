import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PostsContainer, TitlePage } from './styled'
import { useParams } from 'react-router-dom'
// import { useProtectPage } from '../../../hooks/useProtectPage';
import CardPost from '../../../components/CardPost/CardPost'



function DetailsPostsPage() {
  const [postDetails,setPostDetails] = useState([])
  
  // useProtectPage() //Proteção da página dando erro

  const params = useParams()
  

  useEffect(()=>{
    GetPostDetails()
  },[])

  const GetPostDetails = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
    {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((response)=>{
        setPostDetails(response.data.post)
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  
  console.log(postDetails)

  return (
    <PostsContainer>
      <TitlePage>Comentários:</TitlePage>
      {postDetails && postDetails.comments && postDetails.comments.map((item) => {
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
  )
}
export default DetailsPostsPage