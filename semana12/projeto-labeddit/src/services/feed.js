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

export const AddComment = (body, id) => {
    const token = localStorage.getItem("token")

    axios.post(`${BASE_URL}/posts/${id}/comment`, body,  {
            headers: {
                Authorization: token
            }
        }).then(() => {
        alert('Comentário enviado com sucesso! 🧡🧡🧡')
    }).catch((error) => {
        alert('Algo deu errado! 😥')
        console.log(error)
    })
}

export const vote = (decision, id) => {
    const token = localStorage.getItem("token")

    const body = {
        direction: decision,
    }

    axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
        headers: {
            Authorization: token
        }
    })
    .then(() => {
    }).catch((error) => {
      console.log(error)
    })
}