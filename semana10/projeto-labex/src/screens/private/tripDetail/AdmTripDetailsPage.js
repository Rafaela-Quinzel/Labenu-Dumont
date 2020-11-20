import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { DetailsContainer, DetailsTrip } from './styled'
import { useProtectedPage } from '../../../services/useProtectedPage'
import axios from 'axios'



function AdmTripDetailsPage() {
    const [trip, setTrip] = useState({})
    const [candidates, setCandidates] = useState([])
    const history = useHistory()
    const pathParams = useParams()
    const id = pathParams.id

    useProtectedPage()


    const goBack = () => {
       history.goBack()
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
            setCandidates(response.data.trip.candidates)
        }).catch((error) => {
                console.log(error)
        })
    }
    
    // Aceitar candidato
    const aceptApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips/${id}/candidates/${candidateId}/decide`,
            body, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidato aprovado!")
                getTripDetails()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //rejeitar candidato
    const rejectApplication = (candidateId, approve) => {
        const body = {
            approve: approve
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips/${id}/candidates/${candidateId}/decide`,
            body,  {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert("Candidato reprovado!")
                getTripDetails()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <DetailsContainer>
            <button onClick={goBack}>
                Voltar
            </button>
            
            <h3>Detalhes da Viagem:</h3>
            <br/>
            <DetailsTrip>
              <h4>Viagem:</h4>
                <p>Nome: {trip.name}</p>
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
                           <button onClick={() => aceptApplication(candidate.id, true)}>Aceitar candidato</button>
                           <button onClick={() => rejectApplication(candidate.id, false)}>Recusar candidato</button>
                        </div>
                    )})}
                    <h4>Candidatos Aprovados:</h4>
                    {trip.approved && trip.approved.map(candidate => {
                    return (
                        <div key={candidate.id}>
                           <p>Nome: {candidate.name}</p>
                           <p>Idade: {candidate.age}</p>
                           <p>Profissão: {candidate.profession}</p>
                           <p>País: {candidate.country}</p>
                           <p>Motivo: {candidate.applicationText}</p>
                        </div>
                    )})}
            </DetailsTrip>
        </DetailsContainer>
    )
}
export default AdmTripDetailsPage;