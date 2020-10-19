import React from "react";


class Etapa1 extends React.Component {
    state = {
    valorInputNomeUsuario: "",
    valorInputIdadeUsuario: "",
    valorInputEmail: "",
    etapa: ""
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputIdadeUsuario = (event) => {
    this.setState({ valorInputIdadeUsuario: event.target.value });
  };

  onChangeInputNomeEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

onClickProximaPagina = () =>{
    this.setState({etapa: "etapa2"})
  }


render() {
return (
    <div className="etapa1">
    <h2>ETAPA 1 - DADOS GERAIS</h2>
  <p>1. Qual é o seu nome? {this.state.valorInputNomeUsuario}</p>
  <input
    onChange={this.onChangeInputNomeUsuario}
    value={this.state.valorInputNomeUsuario}
  />
  <p>2. Qual é a sua idade? {this.state.valorInputIdadeUsuario}</p>
  <input
    onChange={this.onChangeInputIdadeUsuario}
    value={this.state.valorInputIdadeUsuario}
  />
  <p>3. Qual é o seu email? {this.state.valorInputEmail}</p>
  <input
    onChange={this.onChangeInputEmail}
    value={this.state.valorInputEmail}
  />
  <p>4. Qual é asua escolaridade? {this.state.valorInputH1}</p>
  <select>
    <option value="" disabled selected>Selecione a escolaridade</option>
    <option value= "medio-incompleto">Ensino médio incompleto</option>
    <option value= "medio-completo">Ensino médio completo</option>
    <option value= "superior-incompleto">Ensino superior incompleto</option>
    <option value= "superior-completo">Ensino superior completo</option>
  </select>
</div>
);
}
}
export default Etapa1;