import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddMusics from './AddMusics';

class Playlists extends React.Component {
  state = {
    playlists: [],
    playlistValue: "",
    currentPage: 'signUp'
  }

  changeAddMusics = () => {
    if(this.state.currentPage === 'signUp') {
      this.setState({ currentPage: 'AddMusics' })
    } else {
      this.setState({ currentPage: 'signUp'})
    }
  }
  render() {
  return (
    <div>
     <button onClick={this.props.changePage}>Voltar</button>
      <h2>Suas Playlists:</h2>
      <p>Nome:</p> 
      <ul>
      <li onClick={this.props.changeAddMusics}>Rock</li>
      
      </ul>
      <button>Deletar</button>
      {/* <button onClick={this.changePage}>Mudar</button>*/}
      {/* {this.state.currentPage === 'signUp' ? <AddMusics /> : <Playlists />}  */}
      
    </div>
  );
  }
}

export default Playlists;