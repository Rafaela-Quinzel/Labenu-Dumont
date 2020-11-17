import { FormContainer, InputForm, ButtonSubit} from './styled'
import axios from 'axios'



function ApplicationFormPage() {


    return (
        <FormContainer>
            <h3>Formulário de inscrição:</h3>
            <InputForm placeholder={'Nome'} />
            <br/>
            <InputForm placeholder={'Idade'} />
            <br/>
            <InputForm placeholder={'Sobre'} />
            <br/>
            <InputForm placeholder={'Profissão'} />
            <br/>
            <InputForm placeholder={'País onde reside'} />
            <br/>
            <ButtonSubit>Enviar inscrição</ButtonSubit>
        </FormContainer>
    )
}
export default ApplicationFormPage;