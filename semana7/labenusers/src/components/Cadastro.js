import React from "react";
import styled from "styled-components";


const FormContainer = styled.div`
  border: 1px solid black;
  padding: 50px;
  width: 20vw;
  margin: 5vw 35vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
`

const InputContainer = styled.label`
margin-bottom: 8px;
`;

const EmailContainer = styled.label`
margin-bottom: 8px;
`;

const BotaoSalvar = styled.button`
width: 5vw;
padding: 5px;
`;

const BotaoMudarPagina = styled.button`
width: 15vw;
padding: 5px;
`;


class Cadastro extends React.Component {
  state = {
    name: "",
    email: ""
  }

  render() {
  return (
    <FormContainer>
      <InputContainer>Nome:</InputContainer>
      <input/>
      <EmailContainer>E-mail:</EmailContainer>
      <input/>
      <BotaoSalvar>Salvar</BotaoSalvar>
      <BotaoMudarPagina>Ir para página de lista</BotaoMudarPagina>
    </FormContainer>
  );
}
}
export default Cadastro;