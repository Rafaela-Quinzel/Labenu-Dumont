import React from 'react'
import { useForm } from '../hooks/useForm';
import { AddComment } from '../services/feed';

function CreateComment(props) {
    const { form, onChange } = useForm({text: ""})

    // const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        AddComment(form, props.id )
        // reset()
    }

    const handleInputChange = (event) => {
        const {value, name} = event.target
    
        onChange(value, name)
    }

  
    return (<div>
        <form onSubmit={handleSubmit}>
            <input placeholder="texto" onChange={handleInputChange} value={form.text} name="text"/>
            <button>COMENTAR</button>
        </form>
    </div>

    )
}

export default CreateComment; 