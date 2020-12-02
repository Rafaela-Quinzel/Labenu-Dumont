
export const goToFeedPosts = (history) => {
    history.push('/feeds')
}


export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}


export const goToLoginPage = (history) => {
    history.push('/login')
}


export const goToPrivatePostPage = (history,id) => {
    history.push(`/feed/post/${id}`)
} 