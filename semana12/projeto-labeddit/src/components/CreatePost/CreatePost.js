import React from 'react'
import { useForm } from '../../hooks/useForm';
import { createPost } from '../../services/feed'
import { TextField, Button } from '@material-ui/core'

function CreatePost() {
    const { form, onChange } = useForm({text: "", title: ""})

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleInputChange = (event) => {
        const {value, name} = event.target
    
        onChange(value, name)
    }

    return (
        <div>
            <h2>Crie seu post</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={form.title}
                    onChange={handleInputChange}
                    variant= 'outlined'
                    label='Título'
                    name='title'
                    type='password'
                    required
                />
                <TextField
                    value={form.title}
                    onChange={handleInputChange}
                    variant= 'outlined'
                    label='Senha'
                    name='password'
                    type='password'
                    required
                />
                <Button 
                    variant='contained'
                    color="secondary"
                    type="submit"
                >
                   SALVAR
                </Button>
            
            </form>
        </div>

    )
}

export default CreatePost; 