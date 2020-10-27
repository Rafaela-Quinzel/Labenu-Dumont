import Axios from "axios";
import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista"



class App extends React.Component {
  state = {
    criarUsuario: [],
    criarUsuarioValue: ""
  };

  componentDidMount = () => {
    this.getUsuarios();
  };

  getUsuarios = () => {
    Axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "rafaela-quinzel-dumont"
      }
    })
    .then((resposta) => {
      this.setState({criarUsuario: resposta.data})
      console.log(resposta)
    })
    .catch((erro) => {
      console.log(erro.message)
    })
  };

  render() {
  return (
    <Cadastro/>
    
  );
}
}

export default App;
