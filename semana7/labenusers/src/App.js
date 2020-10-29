import React from "react";
import Cadastro from "./components/Cadastro";
import DadosUsuario from "./components/DadosUsuario";
import Lista from "./components/Lista"


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
      <div className="App">
        {renderizarLista()}
      </div>
    );
  }
}
export default App;
