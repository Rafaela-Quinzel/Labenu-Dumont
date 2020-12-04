import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AddPost } from '../../services/feed'
import { CreateContainer, FormContainer, TitlePage } from './styled'
import { TextField, Button } from '@material-ui/core'

function CreatePost() {
    const { form, onChange } = useForm({text: "", title: ""})

    
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()

        AddPost(form, history)
    }

    const handleInputChange = (event) => {
        const {value, name} = event.target
    
        onChange(value, name)
    }

    return (
        <div>
            
            <CreateContainer >
            <TitlePage>Crie seu post</TitlePage>
                <FormContainer onSubmit={handleSubmit}>
                <TextField
                    value={form.title}
                    onChange={handleInputChange}
                    variant= 'outlined'
                    label='Título'
                    name='title'
                    type='title'
                    required
                />
                <TextField
                    value={form.text}
                    onChange={handleInputChange}
                    variant= 'outlined'
                    label='texto'
                    name='text'
                    type='text'
                    required
                />
                <Button 
                    variant='contained'
                    color="secondary"
                    type="submit"
                >
                   SALVAR
                </Button>
                </FormContainer>
            </CreateContainer>
        </div>
    )
}
export default CreatePost; 