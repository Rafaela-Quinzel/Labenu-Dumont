import styled from 'styled-components'
import { mainDarkPurple } from '../../constants/colors'


// styled CreatePost
export const CreateContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 85vw;
    max-width: 465px;
    height: 50vh;
    margin: 2% auto;
    padding: 10%;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

export const TitlePage = styled.h1`
   color: ${mainDarkPurple};
`