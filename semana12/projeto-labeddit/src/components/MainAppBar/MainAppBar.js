import React from 'react'
import {ButtonsContainer} from "./styled"
import { AppBar, Toolbar, Button }  from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { goToFeedPosts, goToLoginPage } from '../../routes/coordinator'

const MainAppBar = () => {
    const history = useHistory()

    const logOut = () => {
      localStorage.removeItem('token')
      history.push('/login')
  }
    return (
        <AppBar className={'appbar'}>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToFeedPosts(history)}>LabEddit</Button>
              <Button color="inherit" onClick={logOut}>Logout</Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}
export default MainAppBar