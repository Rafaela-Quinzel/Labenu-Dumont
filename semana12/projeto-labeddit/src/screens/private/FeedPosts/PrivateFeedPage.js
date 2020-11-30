import React from 'react'
import { FeedContainer } from './styled'
import CardPost from '../../../components/CardFeed/CardFeed'
import Header from '../../../components/Header/Header'


function FeedPostsPage() {
  return (
    <FeedContainer>
      <Header/>
      <CardPost/>
    </FeedContainer>
  );
}

export default FeedPostsPage;