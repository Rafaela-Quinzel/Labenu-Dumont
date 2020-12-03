import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/public/Login/LoginPage'
import DetailsPostsPage from '../screens/private/DetailsPostsPage/DetailsPostsPage'
import FeedsPage from '../screens/private/FeedPosts/FeedsPage'
import SignUpPage from '../screens/public/SignUp/SignUpPage'
import CreatePost from '../components/CreatePost/CreatePost'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/cadastro' component={SignUpPage}/>
            <Route exact path='/posts' component={FeedsPage}/>
            <Route exact path='/posts/:id' component={DetailsPostsPage}/>
            <Route exact path='/criar_post' component={CreatePost}/>
            <Route>
                 <div>Erro - página não encontrada!</div>
            </Route>
        </Switch>
       
    )
}
export default Router