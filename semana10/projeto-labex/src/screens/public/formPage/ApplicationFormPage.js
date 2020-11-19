import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../../services/useForm'
import { FormContainer, InputForm, ButtonSubit} from './styled'
import axios from 'axios'



function ApplicationFormPage() {
    const [form, onChange] = useForm({
        name: '', 
        age: '', 
        profession: '', 
        country: '', 
        applicationText: ''
    })

    const pathParams = useParams()
    const id = pathParams.id
    console.log(id)

    // const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const singUpTrip = (event) => {
        const body = {
            name: form.name,
            age: form.age,
            profession: form.profession,
            country: form.country,
            applicationText: form.applicationText
        }

        event.preventDefault()
   
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${id}/apply`,
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        ).then((response) => {
           console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <FormContainer>
            <h3>Formulário de inscrição:</h3>
            <form onSubmit={onSubmitForm}>
            <InputForm 
                value={form.name} 
                onChange={onChange}
                placeholder={'Nome'} 
                name={'name'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required
            />
            <br/>
            <InputForm 
                value={form.age} 
                onChange={onChange} 
                placeholder={'Idade'}
                name={'age'}
                type={'number'}
                required 
            />
            <br/>
            <InputForm 
                value={form.applicationText} 
                onChange={onChange}
                placeholder={'Motivo'}
                name={'applicationText'}
                type={'text'}
                pattern={"[A-Za-z]{3,}"}
                required 
            />
            <br/>
            <InputForm 
                value={form.profession} 
                onChange={onChange}
                placeholder={'Profissão'} 
                name={'profession'}
                type={'text'}
                required
            />
            <br/>
            <InputForm 
                value={form.country} 
                onChange={onChange}
                placeholder={'País onde reside'}
                name={'country'}
                type={'text'}
                required 
            />
            <br/>
            <ButtonSubit onClick={singUpTrip}>Enviar inscrição</ButtonSubit>
            </form>
        </FormContainer>
    )
}
export default ApplicationFormPage;