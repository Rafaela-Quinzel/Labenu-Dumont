import React from 'react'
import { useForm } from '../../hooks/useForm';
import { AddComment } from '../../services/feed';
import { FormContainer, CreateContainer } from './styled'
import { TextField, Button } from '@material-ui/core'


function CreateComment(props) {

    const { form, onChange } = useForm({text: ""})


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
                        label='comentar post'
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