import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPosts } from '../routes/coordinator'


export function useProtectedPage() {
    const history = useHistory()

    useEffect(() => {
      const token = window.localStorage.getItem('token')
      if(!token) {
        goToLoginPage(history)
      } else {
        goToFeedPosts(history)
      }
    }, [history])
}