import { TripsTitle, ImagePlanet, ListContainer, TripsContainer, NameTrip } from '../trips/styled'
import  { useRequestData }  from '../../../services/useRequestData'
import { useHistory } from 'react-router-dom'



function ListTripsPage() {

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips', [])

    const history = useHistory()


    const goToApplicationForm = (id) => {
        history.push(`/inscreva-se/${id}/apply`)
    }

    return (
        <div>
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
                                <button onClick={() => goToApplicationForm(trip.id)}>
                                   Increva-se
                                </button>
                        </TripsContainer>
                    )
                })}
            </ListContainer>
        </div>
    )
}
export default ListTripsPage;