import React from 'react'
import { PostsContainer } from './styled'
import  CardPost from '../../../components/CardPost/CardPost'


function PostPage() {
  return (
    <PostsContainer>
       <CardPost/>
    </PostsContainer>
  );
}

export default PostPage;