import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CreateContainer, InputCreate, ButtonSave} from './styled'
import axios from 'axios'


function CreateTripPage() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [durationInDays, setDurationInDays] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')

    const history = useHistory()
    const pathParams = useParams()
    const id = pathParams.id

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleDurationInDays = (event) => {
        setDurationInDays(event.target.value)
    }

    const handlePlanet = (event) => {
        setPlanet(event.target.value)
    }

    const handleDate= (event) => {
        setDate(event.target.value)
    }

    //criar viagem
    const createTrip = () => {
        const body = {
            name: name,
            description: description,
            durationInDays: durationInDays,
            planet: planet,
            date: date
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/${id}/apply`,
        body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
           console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    

    return (
        <CreateContainer>
            <h3>Criar Viagem:</h3>
                <InputCreate placeholder={'Nome'} value={name} onChange={handleName} />
                <InputCreate placeholder={'Planeta'} value={planet} onChange={handlePlanet} />
                <InputCreate placeholder={'Data'} value={date} onChange={handleDate} type='date'/>
                <InputCreate placeholder={'Descrição'} value={description} onChange={handleDescription} />
                <InputCreate placeholder={'Duração'} value={durationInDays} onChange={handleDurationInDays} />
                <ButtonSave onClick={createTrip}>Salvar</ButtonSave>
         
        </CreateContainer>
    )
}
export default CreateTripPage;