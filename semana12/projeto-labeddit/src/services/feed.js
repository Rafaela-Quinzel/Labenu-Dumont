import axios from 'axios'
import { BASE_URL} from '../constants/urls'

const axiosConfig = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const createPost = (body) => {
    axios.post(`${BASE_URL}/posts`, body, axiosConfig).then((response) => {
        alert('Post criado com sucesso! 🧡🧡🧡')
    }).catch((error) => {
      alert('Algo deu errado! 😥')
      console.log(error)
    })
}

export const createComment = (body, postId) => {
    axios.post(`${BASE_URL}/posts/${postId}/comment`, body, axiosConfig).then((response) => {
        alert('Post criado com sucesso! 🧡🧡🧡')
    }).catch((error) => {
        alert('Algo deu errado! 😥')
      console.log(error)
    })
} 