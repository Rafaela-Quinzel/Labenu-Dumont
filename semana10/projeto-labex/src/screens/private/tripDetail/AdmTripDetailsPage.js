import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { DetailsContainer, DetailsTrip } from './styled'
import { useProtectedPage } from '../../../services/useProtectedPage'
import axios from 'axios'



function AdmTripDetailsPage() {
    const [trip, setTrip] = useState({})
    const history = useHistory()
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
    }

    const goBack = () => {
       history.goBack()
    }

    const goToCreateTrip = () => {
       history.push('/criar_viagens')
    }

    useEffect(() => {
        getTripDetails()
    }, [])

    // Ir para os detalhes da viagem selecionada
    const getTripDetails = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trip/${id}`,
        {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setTrip(response.data.trip)
        }).catch((error) => {
                console.log(error)
        })
    }
    
    // Aceitar candidato
    const aceptApplication = (applicationId) => {
        const body = {
            approve: true
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-mello/trips/${id}/candidates/${applicationId}/decide/`,
            body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidate aprovade!")
            })
            .catch(e => {
                console.log(e)
            })
    }

        //rejeitar candidato
        const rejectApplication = (applicationId) => {
            const body = {
               approve: false
            }
           axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips/${id}/candidates/${applicationId}/decide/`,
            body,  {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidate reprovade!")
            })
            .catch(e => {
                console.log(e)
            })
       }

    return (
        <DetailsContainer>
            <button onClick={logOut}>
                Logout
            </button>
            <button onClick={goBack}>
                Voltar
            </button>
            <button onClick={goToCreateTrip}>
                Criar viagem
            </button>
            <h3>Detalhes da Viagem:</h3>
            <br/>
            <DetailsTrip>
                <p>Viagem: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Data: {trip.date}</p>
                <p>Duração: {trip.durationInDays}</p>
                <p>Descrição: {trip.description}</p>
        
                <h4>Candidaturas:</h4>
                {trip.candidates && trip.candidates.map(candidate => {
                    return (
                        <div key={candidate.id}>
                           <p>Nome: {candidate.name}</p>
                           <p>Idade: {candidate.age}</p>
                           <p>Profissão: {candidate.profession}</p>
                           <p>País: {candidate.country}</p>
                           <p>Motivo: {candidate.applicationText}</p>
                           <button onClick={aceptApplication}>Aceitar candidato</button>
                           <button onClick={rejectApplication}>Recusar candidato</button>
                        </div>
                    )})}
            </DetailsTrip>
        </DetailsContainer>
    )
}
export default AdmTripDetailsPage;