import React from "react";
import axios from "axios";
import styled from "styled-components";


// DESAFIO 2 - Tela de detalhes do usuário:
const DadosContainer = styled.div`
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
  align-items: center;
`
const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const BotaoVoltarLista = styled.button`
  background-color: rgba(8, 79, 92, 0.623);
  border-radius: 10px;
  padding: 5px;
  color: whitesmoke;
`
const BotaoBuscar = styled.button`
  background-color:  rgba(61, 95, 95, 0.726);
  padding: 1.8px 10px;
  color: whitesmoke;
`

class DadosUsuario extends React.Component {
  state = {
    dados: [],
    buscarUsuario: "",
  }

  dadosDidMount = () => {
    this.mostrarDadosUsuario();
  }

  mostrarDadosUsuario = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
      {
        headers: {
          Authorization: "rafaela-quinzel-dumont"
        }
      })
        .then((resposta) => {
          this.setState({dados: resposta.data});
          console.log(resposta)
        })
        .catch((erro) => {
          console.log(erro.message)
        })
  };

  onChangeBuscarUsuario = (event) => {
    this.setState({buscarUsuario: event.target.value});    
  }

  render() {
    const mostrarDados = this.state.dados.map((usuario) => {
      return (
        <p key={usuario.id}>
          Nome:{usuario.name}
          E-mail:{usuario.email}
        </p> 
      )
    })
    return (
      <DadosContainer>
        <BotaoVoltarLista onClick={this.props.trocarPagina}>
          Voltar para a lista
        </BotaoVoltarLista>
          <div>
            {/* DESAFIO 4 - input para buscar usuário */}
            <InputContainer>Buscar usuário:</InputContainer>
              <input 
                type="text" 
                value={this.props.buscarUsuario}
                onChange={this.props.onChangeBuscarUsuario}
              />
              <BotaoBuscar>
                Buscar
              </BotaoBuscar>
          </div>
          <h3>Dados do usuário:</h3>
          <div>{mostrarDados}</div> 
      </DadosContainer>
    );
  }
}
export default DadosUsuario;
