import React from "react";
import axios from "axios";
import styled from "styled-components";

// EXERCÍCIO 1 - Tela de cadastro de usuário:
const FormContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border-radius: 20px;
  color: whitesmoke;
  text-shadow: 2px 2px 2px black;
  background-image: url("https://i.pinimg.com/564x/3f/87/b3/3f87b3a75a22bc147b1a5c18bf421226.jpg");
  padding: 60px;
  width: 30vw;
  height: 40vh;
  margin: 5vw 30vw;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
`

const InputContainer = styled.label`
  margin-bottom: 5px;
  margin-top: 5px;
`;

const EmailContainer = styled.label`
  margin-bottom: 8px;
  margin-top: 10px;
`;

const BotaoSalvar = styled.button`
  width: 15vw;
  padding: 3px;
  margin-bottom: 8px;
  margin-top: 10px;
  background-color: rgba(45, 209, 45, 0.37);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;

const BotaoMudarPagina = styled.button`
  width: 20vw;
  padding: 3px 5px;
  margin-bottom: 15px;
  background-color:   rgba(228, 207, 26, 0.37);
  color: whitesmoke;
  border-radius: 10px;
  font-size: 14px;
`;


class Cadastro extends React.Component {
  state = {
    nameValue: "",
    emailValue: ""
  };


  criarNovoUsuario = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    };
    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body, {
        headers: {
          Authorization: "rafaela-quinzel-dumont"
        }
      }
      )
      .then((resposta) => {
        alert("Usuário cadastrado!");
        this.setState({ nameValue: "", emailValue: ""});
      })
      .catch((erro) => {
        console.log(erro.message);
        alert("Não foi possível cadastrar usuário!")
      })
      };


  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value});
  };
    
  onChangeEmailValue = (event) => {
    this.setState({emailValue: event.target.value})
      };


  render() {
    return (
      <FormContainer>
        <InputContainer>Nome:</InputContainer>
          <input
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
            placeholder='Digite seu nome'/>
            <EmailContainer>E-mail:</EmailContainer>
          <input
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
            placeholder='Digite seu e-mail'/>
          <BotaoSalvar onClick={this.criarNovoUsuario}>Salvar</BotaoSalvar>
          <BotaoMudarPagina onClick={this.props.trocarPagina}>Ir para página de lista</BotaoMudarPagina>
        </FormContainer>
    )
  }
}
export default Cadastro;