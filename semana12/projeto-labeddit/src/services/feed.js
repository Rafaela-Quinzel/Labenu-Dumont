import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeedPosts } from '../routes/coordinator'


export const AddPost = (body, history) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts`, body,  {
            headers: {
                Authorization: token
            }
        }).then(() => {
        alert('Post criado com sucesso! 🧡🧡🧡')
        goToFeedPosts(history)
    }).catch((error) => {
        alert('Algo deu errado! 😥')
        console.log(error)
    })
}

export const AddComment = (body, postId) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts/${postId}/comment`, body,  {
            headers: {
                Authorization: token
            }
        }).then(response => {
        console.log(response)
        alert('Post criado com sucesso! 🧡🧡🧡')
    }).catch((error) => {
        alert('Algo deu errado! 😥')
        console.log(error)
    })
} 