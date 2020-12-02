import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeedPosts } from '../routes/coordinator'


export function useUnProtectPage() {
    const history = useHistory()

    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token) {
        goToFeedPosts(history)
      }
    }, [history])
  
}