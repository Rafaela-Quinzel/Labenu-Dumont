import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PostsContainer, CardContainer, HeaderPost, PostCardContainer, 
  CardContent, FooterPost, NameUserPost, ButtonVote, Comments, TitlePage } from './styled'
import { useParams } from 'react-router-dom'
// import { useProtectPage } from '../../../hooks/useProtectPage';
import { useRequestData } from  '../../../hooks/useRequestData'
import { BASE_URL } from '../../../constants/urls'
import CardPost from '../../../components/CardPost/CardPost'



function DetailsPostsPage() {
  const [postDetails,setPostDetails] = useState([])
  
  // useProtectPage() //Proteção da páginadando erro

  const params = useParams()
  
  // const data = useRequestData(`${BASE_URL}/posts/${params.id}`, {}) 
 

  // console.log(data)

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


  return (
    <PostsContainer>
      <CardPost
        username={postDetails.username}
        text={postDetails.text}
        votesCount={postDetails.votesCount}
        commentsCount={postDetails.commentsCount}
        id={postDetails.id}
      />
    </PostsContainer>

  );
}

export default DetailsPostsPage;