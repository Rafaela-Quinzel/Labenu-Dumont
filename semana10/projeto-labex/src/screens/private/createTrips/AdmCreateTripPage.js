import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../../services/useForm'
import { CreateContainer, InputCreate, ButtonSave} from './styled'
import axios from 'axios'


function CreateTripPage() {
    const [form, onChange] = useForm({
        email: '', 
        description: '',
        durationInDays: '',
        planet: '',
        date: ''
    })


    // let data = new Date()

    //  console.log(data)
     

    // const history = useHistory()
    // const pathParams = useParams()
    // const id = pathParams.id

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    //criar viagem
    const createTrip = (event) => {
        const body = {
            name: form.name,
            description: form.description,
            durationInDays: form.durationInDays,
            planet: form.planet,
            date: form.date
        }
        
        event.preventDefault()

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips',
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then(() => {
            alert('Viagem cadastrada com sucesso!')
        }).catch((error) => {
            alert('Não foi possível cadastrar a viagem!')
            console.log(error)
        })
    }


    return (
        <CreateContainer>
            <h3>Criar Viagem:</h3>
            <form onSubmit={onSubmitForm}>
                <InputCreate 
                    value={form.name} 
                    onChange={onChange}
                    placeholder={'Nome'}
                    name={'name'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required 
                />
                <InputCreate 
                    value={form.planet} 
                    onChange={onChange}
                    placeholder={'Planeta'}
                    name={'planet'}
                    type={'text'} 
                    pattern={'[A-Za-z]{3,}'}
                    required  
                />
                <InputCreate 
                    value={form.date} 
                    onChange={onChange}
                    placeholder={'Data'}
                    name={'date'}
                    type={'date'}
                    min={'2020-11-19'}
                    required
                />
                <InputCreate 
                    value={form.description} 
                    onChange={onChange}
                    placeholder={'Descrição'} 
                    name={'description'}
                    type={'text'}
                    required
                />
                <InputCreate
                    value={form.durationInDays} 
                    onChange={onChange} 
                    placeholder={'Duração em dias'} 
                    name={'durationInDays'}
                    type={'number'}
                 />
                <ButtonSave onClick={createTrip}>Salvar</ButtonSave>
                </form>
         
        </CreateContainer>
    )
}
export default CreateTripPage;