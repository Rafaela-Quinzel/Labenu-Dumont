import { DetailsContainer, DetailsTrip, ButtonSignUp} from './styled'
import axios from 'axios'



function TripDetailsPage() {


    return (
        <DetailsContainer>
            <h3>Detalhes da Viagens:</h3>
            <br/>
            <DetailsTrip>
                <p>Viagem 1</p>
                <p>descrição</p>
                <ButtonSignUp>Inscrever-se</ButtonSignUp>
            </DetailsTrip>
        </DetailsContainer>
    )
}
export default TripDetailsPage;