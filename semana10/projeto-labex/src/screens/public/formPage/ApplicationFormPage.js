import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FormContainer, InputForm, ButtonSubit} from './styled'
import axios from 'axios'



function ApplicationFormPage() {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [profession, setProfession] = useState('')
    const [country, setCountry] = useState('')
    const [applicationText, setApplicationText] = useState('')

    const pathParams = useParams()
    const id = pathParams.id

    const history = useHistory()


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAge = (event) => {
        setAge(event.target.value)
    }

    const handleProfession = (event) => {
        setProfession(event.target.value)
    }

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    const handleApplicationText = (event) => {
        setApplicationText(event.target.value)
    }

    const singUpTrip = () => {
        const body = {
            name: name,
            age: age,
            profession: profession,
            country: country,
            applicationText: applicationText
        }
   
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
            <InputForm placeholder={'Nome'} value={name} onChange={handleName} />
            <br/>
            <InputForm placeholder={'Idade'} value={age} onChange={handleAge} type='number'/>
            <br/>
            <InputForm placeholder={'Motivo'} value={applicationText} onChange={handleApplicationText} />
            <br/>
            <InputForm placeholder={'Profissão'} value={profession} onChange={handleProfession} />
            <br/>
            <InputForm placeholder={'País onde reside'} value={country} onChange={handleCountry} />
            <br/>
            <ButtonSubit onClick={singUpTrip}>Enviar inscrição</ButtonSubit>
        </FormContainer>
    )
}
export default ApplicationFormPage;