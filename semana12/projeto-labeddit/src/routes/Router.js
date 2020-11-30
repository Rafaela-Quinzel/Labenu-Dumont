import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/private/Login/LoginPage'
import PrivatePostPage from '../screens/private/PostPage/PrivatePostPage'
import FeedPostsPage from '../screens/private/FeedPosts/PrivateFeedPage'
import SignUpPage from '../screens/public/SignUp/SignUpPage'

const Router = () => {
    return (
        <BrowserRouter>
           <Switch>
               <Route exact path='/feeds' component={FeedPostsPage}/>
               <Route exact path='/cadastro' component={SignUpPage}/>
               <Route exact path='/login' component={LoginPage}/>
               <Route exact path='/posts' component={PrivatePostPage}/>
               <Route>
                   <div>Erro - página não encontrada!</div>
               </Route>
           </Switch>
        </BrowserRouter>
    )
}
export default Router