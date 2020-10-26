import React from "react";

class Etapa2 extends React.Component {
    state = {
       valorInputCurso: "",
       valorInputUnidade: "",
    };


    onChangeInputCurso= (event) => {
       this.setState({ valorInputCurso: event.target.value });
    };

    onChangeInputUnidade = (event) => {
       this.setState({ valorInputUnidade: event.target.value });
    };


   render() {
        return (
            <div className="informacoes-ensino">
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
                
                <p>5. Qual curso?</p>
                <input
                   onChange={this.onChangeInputCurso}
                   value={this.state.valorInputCurso}
                />

                <p>6. Qual a unidade de ensino?</p>
                <input
                   onChange={this.onChangeInputUnidade}
                   value={this.state.valorInputUnidade}
                />
            </div>
        );
    }
}
export default Etapa2;