import React from "react";
import axios from "axios";
import styled from "styled-components";



const ListaContainer = styled.div`
  border: 1px solid black;
  padding: 50px;
  width: 50vw;
  margin: 5vw 35vw;
  text-align: center;
`


class Lista extends React.Component {

    state = {
        listaUsuarios: [],
      };
    
    
      mostrarUsuarios = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", 
        {
          headers: {
            Authorization: "rafaela-quinzel-dumont"
          }
        })
        .then((resposta) => {
          this.setState({listaUsuarios: resposta.data});
          console.log(resposta)
        })
        .catch((erro) => {
          console.log(erro.message)
        })
      };

      componentDidMount = () => {
        this.mostrarUsuarios();
      };

      deletaUsuario = (id)  =>{
          axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/, ${id}`, {
              headers: {
                  Authorization: "rafaela-quinzel-dumont"
              }
          })
          .then(() => {
              window.alert("Usuário deletado!")
          })
          .catch((erro) => {
              console.log(erro.message)
          })
      }


  render() {
      const mostrarLista = this.state.listaUsuarios.map((usuarios) => {
      return <p key={usuarios.id}>
          {usuarios.name}
          <button onClick={this.deletaUsuario}>X</button>
          
          </p>
      })
  return (
    <ListaContainer>
        <button onClick={this.props.trocarPagina}>Voltar a página de Cadastro</button>
        <h2>Usuários Cadastrados:</h2>
        <div>
        {mostrarLista}
        </div>
             
    </ListaContainer>
  );
}
}

export default Lista;
