import React from "react";
import styled from "styled-components";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista"

// const AppContainer = styled.div`
//   font-family: Arial, Helvetica, sans-serif;
//   border: 1px solid black;
//   padding: 50px;
//   width: 20vw;
//   margin: 5vw 35vw;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: flex-start;
// `



class App extends React.Component {
  state = {
    pagina: true,
  }

  trocarPagina = () => {
    if (this.state.pagina) {
    this.setState({pagina: false})
    } else {
      this.setState({pagina: true})
    }
  };

 
  render() {
    const renderizarLista = () => {
      if (this.state.pagina) {
        return <Cadastro trocarPagina={this.trocarPagina}/>
      } else {
      return <Lista trocarPagina={this.trocarPagina}/>
      }
    }
   return (
     <div>
     <p>{renderizarLista()}</p> 
     </div>
   
    
  );
}
}

export default App;
