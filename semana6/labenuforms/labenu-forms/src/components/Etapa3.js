import React from "react";

class Etapa3 extends React.Component {

    state = {
       valorInputMotivo: "",
       valorInputComplementar: "",
    };

    onChangeInputMotivo = (event) => {
       this.setState({ valorInputMotivo: event.target.value });
    };

    onChangeInputComplementar = (event) => {
       this.setState({ valorInputComplementar: event.target.value });
    };


    render() {
        return (
            <div className="informacoes-gerais">
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

                <p>7. Porque você não terminou um curso de graduação?</p>
                <input
                  onChange={this.onChangeInputMotivo}
                  value={this.state.valorInputMotivo}
                />

                <p>8. Você fez algum curso complementar?</p>
                <input
                  onChange={this.onChangeInputComplementar}
                  value={this.state.valorInputComplementar}
                />
            </div>
        );
    }
}
export default Etapa3;