import React, {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { AddComment } from '../../services/feed';
import { FormContainer, CreateContainer } from './styled'
import { TextField, Button } from '@material-ui/core'
import GetPostDetails from '../../screens/private/DetailsPostsPage/DetailsPostsPage'


function CreateComment(props) {

    const { form, onChange } = useForm({text: ""})

    // const history = useHistory()

    // const params = useParams()


    const handleSubmit = (event) => {
        event.preventDefault()
        AddComment(form, props.id)
        // reset()
    }

    const handleInputChange = (event) => {
        
        const {value, name} = event.target
    
        onChange(value, name)
    }

   

    return (
        <CreateContainer>
            <FormContainer onSubmit={handleSubmit}>
                    <TextField
                        value={form.text}
                        onChange={handleInputChange}
                        variant= 'outlined'
                        label='Comentário'
                        name='text'
                        type='text'
                        required
                    />
                    <Button 
                        variant='contained'
                        color="secondary"
                        type="submit"
                    >
                    ENVIAR
                    </Button>
            </FormContainer>
        </CreateContainer>

    )
}
export default CreateComment; 