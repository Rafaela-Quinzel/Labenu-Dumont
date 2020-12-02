import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeedPosts } from '../routes/coordinator'


export const login = (body, history) => {
   axios.post(`${BASE_URL}/login`, body).then(response => {
       localStorage.setItem('token', response.data.token)
       goToFeedPosts(history)
   }).catch(error => {
       console.log(error.message)
       alert('E-mail ou senha inválidos!')
   })
}


export const signUp = (body, history) => {
    axios.post(`${BASE_URL}/signup`, body).then(response => {
        localStorage.setItem('token', response.data.token)
        alert('Cadastro efetuado com sucesso!')
        goToFeedPosts(history)
    }).catch(error => {
        console.log(error.message)
    })
 }