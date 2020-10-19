import React from 'react';
// import './App.css';
// import styled from "styled-components";
import Etapa1 from "./components/Etapa1";
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
// import Etapa2 from "./components/Etapa2";
// import Etapa3 from "./components/Etapa3";
// import Final from "./components/Final";


class App extends React.Component{
  state = {
    etapa: 1,
  };

  onClickProximaEtapa = () =>{
    this.setState({etapa: + 1})
  }
  
render() {
  const renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <div></div>
    }
  };

return (
    <div className="App">
      {<Etapa1 />}
  <button onClick={this.onClickProximaEtapa}>Proxima etapa</button>
</div>
);
}
}

export default App;

