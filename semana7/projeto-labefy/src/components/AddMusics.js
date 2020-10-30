import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class AddMusics extends React.Component {
  state = {
    infoPlaylists: [],
    infoPlaylistValue: ""
  }


  render() {
  return (
    <div>
      <button>Voltar as Playlists</button>
      <h2>Playlists: Rock</h2>
      <p>Nome música:</p>
	  <p>Artista</p>
      <p>Url:</p>
      <audio controls={'controls'}></audio>

      <button>Editar</button>
      <input placeholder={'Nome da música'}></input>
	  <input placeholder={'Nome do artista'}></input>
      <input placeholder={'URL da música'}></input>
       <button>Salvar</button>
     
      <button>Voltar para playlists</button>
    </div>
  );
  }
}

export default AddMusics;