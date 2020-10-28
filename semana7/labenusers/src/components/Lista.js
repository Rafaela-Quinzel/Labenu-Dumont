import React from "react";
import axios from "axios";
import styled from "styled-components";



const ListaContainer = styled.div`
  border: 1px solid black;
  padding: 50px;
  width: 50vw;
  margin: 5vw 20vw;
  display: grid;
  justify-content: center;
`
const BotaoDeletar = styled.span`
color: red;
margin-left: 10px;
`
const BotaoVoltar = styled.button`
background-color: #007d7d;
border-radius: 10px;
color: whitesmoke;
`


const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "rafaela-quinzel-dumont"
  }
}


class Lista extends React.Component {

    state = {
        listaUsuarios: []
      }

      componentDidMount = () => {
        this.mostrarUsuarios();
      }
    
      mostrarUsuarios = () => {
        axios.get(baseUrl, axiosConfig) 
        .then((resposta) => {
          this.setState({listaUsuarios: resposta.data});
        })
        .catch((erro) => {
          console.log(erro.message)
        })
      };

      deletaUsuario = (id)  =>{
          axios.delete(`${baseUrl}/${id}`, axiosConfig)
          .then(() => {
              alert("Usuário deletado!")
              this.mostrarUsuarios()
          })
          .catch((erro) => {
              console.log(erro.message)
          })
      }


  render() {
      const mostrarLista = this.state.listaUsuarios.map((usuario) => {
      return (
        <p key={usuario.id}>
          {usuario.name}
          <BotaoDeletar onClick={() => this.deletaUsuario(usuario.id)}>
            X
            </BotaoDeletar>
          </p>
        )
      })
  return (
    <ListaContainer>
      <BotaoVoltar
        onClick={this.props.trocarPagina}>
          Voltar a página de Cadastro
        </BotaoVoltar>
        <h2>Usuários Cadastrados:</h2>
        <div>{mostrarLista}</div> 
    </ListaContainer>
  );
}
}

export default Lista;
