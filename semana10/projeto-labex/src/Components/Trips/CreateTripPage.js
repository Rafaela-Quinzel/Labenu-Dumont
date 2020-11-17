import { CreateContainer, InputCreate, ButtonSave} from './styled'
import axios from 'axios'



function CreateTripPage() {


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