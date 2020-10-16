import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import FotoPerfil1 from './imagens/perfil1.png'
import FotoPost1 from './imagens/foto1.jpg'
import FotoPerfil2 from './imagens/perfil2.png'
import FotoPost2 from './imagens/foto2.jpg'
import FotoPerfil3 from './imagens/perfil3.png'
import FotoPost3 from './imagens/foto3.jpg'


class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={FotoPerfil1}
          fotoPost={FotoPost1}
        />

         {/* Exercício 1 - Implementações: */}
        <Post
          nomeUsuario={'Amanda'}
          fotoUsuario={FotoPerfil2}
          fotoPost={FotoPost2}
        />

        <Post
          nomeUsuario={'João Pedro'}
          fotoUsuario={FotoPerfil3}
          fotoPost={FotoPost3}
        />
        
      </div>
    );
  }
}

export default App;
