
export const goToFeedPosts = (history) => {
    history.push('/posts')
}


export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}


export const goToLoginPage = (history) => {
    history.push('/login')
}


export const goToDetailsPostsPage = (history, id) => {
    history.push(`/posts/${id}`)
} 

export const logOut = (history) => {
    localStorage.removeItem('token')
    history.push('/login')
}

export const goToCreatePost = (history) => {
    history.push('/criar_post')
}