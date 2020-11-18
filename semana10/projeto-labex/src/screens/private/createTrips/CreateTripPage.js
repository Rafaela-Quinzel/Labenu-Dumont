import { CreateContainer, InputCreate, ButtonSave} from './styled'
import  { usePostTrips }  from '../../../services/usePostTrips'
import axios from 'axios'



function CreateTripPage() {

    const createTrips = usePostTrips('https://us-central1-labenu-apis.cloudfunctions.net/labeX/rafaela/trips', {})
    console.log(createTrips)




    return (
        <CreateContainer>
            <h3>Criar Viagem:</h3>
                <InputCreate placeholder={'Nome'} />
                <InputCreate placeholder={'Planeta'} />
                <InputCreate placeholder={'Data'} />
                <InputCreate placeholder={'Descrição'} />
                <InputCreate placeholder={'Duração'} />
                <ButtonSave>Salvar</ButtonSave>
         
        </CreateContainer>
    )
}
export default CreateTripPage;