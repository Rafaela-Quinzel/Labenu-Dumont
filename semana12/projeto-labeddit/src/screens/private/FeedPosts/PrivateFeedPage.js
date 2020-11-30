import React from 'react'
import { FeedContainer } from './styled'
import { CardPost } from '../../../components/CardPost/CardPost'


function FeedPostsPage() {
  return (
    <FeedContainer>
      <CardPost/>
    </FeedContainer>
  );
}

export default FeedPostsPage;