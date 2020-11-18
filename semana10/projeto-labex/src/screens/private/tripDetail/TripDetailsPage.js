import React, { useState, useEffect } from 'react'
import { DetailsContainer, DetailsTrip, ButtonSignUp} from '../../trips/styled'
import { useProtectedPage } from '../../../services/useProtectedPage'
import axios from 'axios'



function TripDetailsPage() {
    const [trips, setTrips] = useState({})
    useProtectedPage()


    useEffect(() => {
        getTripsDetails()
    }, [])


    const getTripsDetails = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips',
        {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then((response) => {
            setTrips(response.data.trips)
        }).catch((error) => {
                console.log(error)
        })
    }

    return (
        <DetailsContainer>
            <h3>Detalhes da Viagens:</h3>
            <br/>
            <DetailsTrip key={trips.id}>
                <p>Viagem 1</p>
                <p>descrição</p>
            
                     <p>{trips.name}</p>
                    
               
                
                <ButtonSignUp>Inscrever-se</ButtonSignUp>
            </DetailsTrip>
        </DetailsContainer>
    )
}
export default TripDetailsPage;