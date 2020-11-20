import { TripsTitle, ImagePlanet, ListContainer, TripsContainer, NameTrip } from './styled'
import  { useRequestData }  from '../../../services/useRequestData'
import { useHistory, useParams } from 'react-router-dom'
// import React, { useState, useEffect } from 'react'
import axios from 'axios'




function ListTripsPage() {

    const pathParams = useParams()
    const id = pathParams.id

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips', [])


    //deleltar viagem
    const deleteTrip = () => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips/${id}`,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then((response) => {
                alert('Viagem deletada!')
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const history = useHistory()
    

    const goToTripDetailsPage = (id) => {
        history.push(`/detalhes_da_viagem/${id}`)
    }

    const goToSingUpPage = () => {
        history.push('/cadastrar_login')
    }

    const goToCreateTrip = () => {
        history.push('/criar_viagens')
     }

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
    }


    return (
        <div>
            <button onClick={logOut}>Logout</button>
            <button onClick={goToSingUpPage}>Cadastrar login</button>
            <button onClick={goToCreateTrip}>
                Criar viagem
            </button>
            <TripsTitle>Viagens cadastradas:</TripsTitle>
                <ListContainer key={getTrips.id}>
                    {getTrips.map(trip => {
                        return (
                            <TripsContainer >
                                <h3>Viagem:</h3>
                                <ImagePlanet 
                                   src={'https://abrilmdemulher.files.wordpress.com/2019/10/mercucc81rio_retrocc81grado6.png?w=1000'}
                                />
                                <NameTrip>
                                   {trip.name}
                                </NameTrip>
                                <button onClick={() => goToTripDetailsPage(trip.id)}>
                                   Ver detalhes
                                </button>
                                <button onClick={() => deleteTrip(trip.id, true)}>
                                   Excluir
                                </button>
                            </TripsContainer>
                        )
                    })}
                </ListContainer>
        </div>
    )
}
export default ListTripsPage;