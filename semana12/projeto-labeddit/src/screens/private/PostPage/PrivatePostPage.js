import React from 'react'
import { PostsContainer } from './styled'
import  CardPost from '../../../components/CardPost/CardPost'
import { useProtectedPage } from '../../../hooks/useProtectPage';
import { useUnProtectPage } from '../../../hooks/useUnProtectPage';


function PostPage() {
  
  useProtectedPage() //Proteção da página

  // useUnProtectPage() //Se já tem token cadastrado, vai entrar direto no feed


  return (
    <PostsContainer>
       <CardPost/>
    </PostsContainer>
  );
}

export default PostPage;