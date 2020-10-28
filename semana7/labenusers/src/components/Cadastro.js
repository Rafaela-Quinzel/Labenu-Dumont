import React from "react";
import axios from "axios";
import styled from "styled-components";
import Lista from "./Lista";



const FormContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
  padding: 60px;
  width: 25vw;
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
padding: 2px;
margin-bottom: 8px;
margin-top: 10px;
background-color: green;
color: whitesmoke;
`;

const BotaoMudarPagina = styled.button`
width: 15vw;
padding: 2px;
margin-bottom: 15px;
background-color: goldenrod;
color: whitesmoke;
`;



class Cadastro extends React.Component {
    state = {
        criarUsuario: [],
        criarEmail: [],
        criarUsuarioValue: "",
        criarEmailValue: ""
      };


    criarNovoUsuario = () => {
        const body = {
          name: this.state.criarUsuarioValue,
          email: this.state.criarEmailValue
        };
    
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, {
            headers: {
              Authorization: "rafaela-quinzel-dumont"
            }
          }
        )
        .then((resposta) => {
          this.setState({criarUsuarioValue: "", criarEmailValue: ""});
          this.mostrarUsuarios();
          console.log(resposta)
          window.alert("Usuário cadastrado!")
        })
        .catch((erro) => {
          console.log(erro.message);
          console.log(body)
        })
      };


      onChangeCriarUsuarioValue = (event) => {
        this.setState({criarUsuarioValue: event.target.value});
      };
    
      onChangeCriarEmailValue = (event) => {
        this.setState({criarEmailValue: event.target.value})
      };

      


  render() {
        return (
            <FormContainer>
            
            <InputContainer>Nome:</InputContainer>
            <input
            value={this.state.name}
            onChange={this.onChangeCriarUsuarioValue}
            placeholder='Digite seu nome'/>
            <EmailContainer>E-mail:</EmailContainer>
            <input
            value={this.state.email}
            onChange={this.onChangeCriarEmailValue}
            placeholder='Digite seu e-mail'/>
            <BotaoSalvar onClick={this.criarNovoUsuario}>Salvar</BotaoSalvar>
            <BotaoMudarPagina onClick={this.props.trocarPagina}>Ir para página de lista</BotaoMudarPagina>
            </FormContainer>
            
        )
}
}
export default Cadastro;