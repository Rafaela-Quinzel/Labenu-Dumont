import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import FotoPerfil1 from './imagens/perfil1.png'
import FotoPerfil2 from './imagens/perfil2.png'
import FotoPerfil3 from './imagens/perfil3.png'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={FotoPerfil1}
          fotoPost={'https://picsum.photos/200/150'}
        />

         {/* Exercício 1 - Implementações */}
        <Post
          nomeUsuario={'Amanda'}
          fotoUsuario={FotoPerfil2}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'João Pedro'}
          fotoUsuario={FotoPerfil3}
          fotoPost={'https://picsum.photos/200/150'}
        />
        
      </div>
    );
  }
}

export default App;
