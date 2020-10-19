import React from "react";

class Etapa2 extends React.Component {
    state = {
        valorInputCurso: "",
        valorInputUnidade: "",
      };


    render() {
      return (
          <div className="informacoes-ensino">
          <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5. Qual curso? {this.state.valorInputNomeUsuario}</p>
        <input
          onChange={this.onChangeInputCurso}
          value={this.state.valorInputCurso}
        />
        <p>6. Qual a unidade de ensino? {this.state.valorInputUnidade}</p>
        <input
          onChange={this.onChangeInputUnidade}
          value={this.state.valorInputUnidade}
        />
        <button onClick={this.onClickProximaPagina}>Proxima etapa</button>
      </div>
      );
    }
  }
  
  export default Etapa2;