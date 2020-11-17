import {ListContainer, TripContainer} from './styled'
import axios from 'axios'



function ListTripsPage() {


    return (
        <div>
            <h3>Página de Viagens:</h3>
        <ListContainer>
            
            <TripContainer>
                <p>Viagem 1</p>
                <p>descrição</p>
            </TripContainer>
            <TripContainer>
                <p>Viagem 2</p>
                <p>descrição</p>
            </TripContainer>
            <TripContainer>
                <p>Viagem 3</p>
                <p>descrição</p>
            </TripContainer>
            <TripContainer>
                <p>Viagem 4</p>
                <p>descrição</p>
            </TripContainer>
        </ListContainer>
        </div>
    )
}
export default ListTripsPage;