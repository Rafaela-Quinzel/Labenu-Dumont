import { TripsTitle, ImagePlanet, ListContainer, TripsContainer, NameTrip } from './styled'
import  { useRequestData }  from '../../../services/useRequestData'
import { useHistory } from 'react-router-dom'




function ListTripsPage() {

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips', [])

    const history = useHistory()
    

    const goToTripDetailsPage = (id) => {
        history.push(`/detalhes_da_viagem/${id}`)
    }

    const logOut = () => {
        localStorage.removeItem('token')
        history.push('/home')
    }


    return (
        <div>
            <button onClick={logOut}>Logout</button>
            <TripsTitle>Página de Viagens:</TripsTitle>
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
                            </TripsContainer>
                        )
                    })}
                </ListContainer>
        </div>
    )
}
export default ListTripsPage;