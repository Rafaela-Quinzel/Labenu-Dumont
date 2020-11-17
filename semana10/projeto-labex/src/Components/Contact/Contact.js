import { ContactContainer, InputData, InputMessage, ButtonSubit} from './styled'
import axios from 'axios'



function Contact() {


    return (
        <ContactContainer>
            <h3>Fale conosco:</h3>
            <InputData placeholder={'Nome'} />
            <InputData placeholder={'Email'} />
            <InputMessage placeholder={'Deixe sua mensagem'}></InputMessage>
            <ButtonSubit>Enviar</ButtonSubit>
         
        </ContactContainer>
    )
}
export default Contact;