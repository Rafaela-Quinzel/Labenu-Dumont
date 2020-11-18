import { TripsTitle, ImagePlanet, ListContainer, TripContainer, NameTrip } from '../../../trips/styled'
import  { useRequestData }  from '../../../../services/useRequestData'
import { useHistory } from 'react-router-dom'



function ListTripsPage() {

    const getTrips = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela-dumont/trips', [])

    const history = useHistory()


    const goToApplicationForm = () => {
        history.push("/inscreva-se")
    }



    return (
        <div>
            <TripsTitle>Página de Viagens:</TripsTitle>
            <ListContainer>
                <TripContainer key={getTrips.id}>
                    {getTrips.map(trip => {
                        return (
                        <NameTrip>
                            <ImagePlanet src={'https://abrilmdemulher.files.wordpress.com/2019/10/mercucc81rio_retrocc81grado6.png?w=1000'} />
                           <h3>Viagem:</h3>
                            {trip.name}
                        </NameTrip>
                        )
                    })}
                    <button onClick={goToApplicationForm}>Increva-se</button>
                </TripContainer>
                <TripContainer>
                    <p>Viagem 2</p>
                    <p>descrição</p>
                    <button onClick={goToApplicationForm}>Increva-se</button>
                </TripContainer>
                <TripContainer>
                    <p>Viagem 3</p>
                    <p>descrição</p>
                    <button onClick={goToApplicationForm}>Increva-se</button>
                </TripContainer>
                <TripContainer>
                    <p>Viagem 4</p>
                    <p>descrição</p>
                    <button onClick={goToApplicationForm}>Increva-se</button>
                </TripContainer>
        </ListContainer>
        </div>
    )
}
export default ListTripsPage;