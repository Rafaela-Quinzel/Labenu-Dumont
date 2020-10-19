import React from "react";

class Etapa3 extends React.Component {

    state = {
        valorInputMotivo: "",
        valorInputComplementar: "",
      };


    render() {
      return (
          <div className="informacoes-gerais">
          <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>7. Porque você não terminou um curso de graduação? {this.state.valorInputMotivo}</p>
        <input
          onChange={this.onChangeInputMotivo}
          value={this.state.valorInputMotivo}
        />
        <p>8. Você fez algum curso complementar? {this.state.valorInputComplementar}</p>
        <input
          onChange={this.onChangeInputComplementar}
          value={this.state.valorInputComplementar}
        />

        <button onClick={this.onClickProximaPagina}>Proxima etapa</button>
      </div>
      );
    }
  }
  
  export default Etapa3;