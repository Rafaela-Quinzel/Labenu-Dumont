import React from "react";
import axios from "axios";
import styled from "styled-components";
import DadosUsuario from "./DadosUsuario";


// EXERCÍCIO 2 - Tela de lista de usuários:
const ListaContainer = styled.div`
  border-radius: 20px;
  background-image: url("https://i.pinimg.com/564x/3f/87/b3/3f87b3a75a22bc147b1a5c18bf421226.jpg");
  color: whitesmoke;
  text-shadow: 2px 2px 2px black;
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
  background-color: rgba(8, 79, 92, 0.623);
  border-radius: 10px;
  padding: 5px;
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
    listaUsuarios: [],
    info: true
  }

  mostarInfo = () => {
    this.setState({ info: !this.state.info})
  };

  componentDidMount = () => {
    this.mostrarUsuarios();
  }
    
  mostrarUsuarios = () => {
    axios.get(baseUrl, axiosConfig).then((resposta) => {
      this.setState({listaUsuarios: resposta.data});
    })
      .catch((erro) => {
        console.log(erro.message)
      })
  };

  deletaUsuario = (id) => {
    //DESAFIO 1 - utilizei um confim para confirmar se realmente vai ser deletado o usuário da lista.
    if(window.confirm("Você tem certeza que deseja excluir este usuário?") === true){
        axios.delete(`${baseUrl}/${id}`, axiosConfig).then(() => {
            alert("Usuário deletado!")
            this.mostrarUsuarios()
        })
          .catch((erro) => {
            console.log(erro.message)
          })
    }
  }

  render() {
    const mostrarLista = this.state.listaUsuarios.map((usuario) => {
      if(this.state.info){
         return (
          <p key={usuario.id} >
            {usuario.name} {usuario.email}
            <BotaoDeletar onClick={() => this.deletaUsuario(usuario.id)}>
              X
            </BotaoDeletar>
             <hr />
          </p>
        )
      } else {
        return(
          <DadosUsuario/>
        )
      }
    })
    return (
      <ListaContainer>
        <BotaoVoltar
          onClick={this.props.trocarPagina}>
            Voltar a página de Cadastro
        </BotaoVoltar>
          <h2>Usuários Cadastrados:</h2>
          <div onClick={this.props.mostarInfo}>{mostrarLista}</div> 
      </ListaContainer>
    );
  }
}
export default Lista;
