import React from 'react'
import { FeedContainer } from './styled'
import CardPost from '../../../components/CardFeed/CardFeed'
import { useProtectedPage } from '../../../hooks/useProtectPage'
// import { useUnProtectPage } from '../../../hooks/useUnProtectPage'



function FeedPostsPage() {
    
  useProtectedPage() //Proteção da página

  // useUnProtectPage() //Se já tem token cadastrado, vai entrar direto no feed


  return (
    <FeedContainer>
      <CardPost/>
    </FeedContainer>
  );
}

export default FeedPostsPage;