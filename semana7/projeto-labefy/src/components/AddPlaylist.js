import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class AddPlaylist extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  }


  render() {
  return (
    <div>
      <h2>Seja bem vindo(a)!</h2>
      <p>Criar uma nova Playlist:</p>
      <input placeholder={'Nome da Playlist'}></input>
      <button>Salvar</button>
      <p>Visualizar playlists criadas:</p>
      <button onClick={this.props.changePage}>Suas Playlists</button>
    </div>
  );
  }
}

export default AddPlaylist;