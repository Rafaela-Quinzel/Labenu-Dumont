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
  state = {
    arrayDePosts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
      fotoPost: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
    },
    { nomeUsuario: 'Amanda',
      fotoUsuario: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
      fotoPost: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
    },

    { nomeUsuario: 'João Pedro',
      fotoUsuario:'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
      fotoPost: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
    }
    ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionarPost = () => {
    const novoPost = {
    nomeUsuario: this.state.valorInputNomeUsuario,
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost
  };

  const novosPosts = [...this.state.arrayDePosts, novoPost];
  this.setState({arrayDePosts: novosPosts})
  console.log(novoPost)
 };

 onChangeInputNomeUsuario = (event) => {
   this.setState({valorInputNomeUsuario: event.target.value})
 };

 onChangeInputFotoUsuario = (event) => {
   this.setState({valorInputFotoUsuario: event.target.value});
 };

 onChangeInputFotoPost = (event) => {
   this.setState({valorInputFotoPost: event.target.value});
 };


  render() {
    const listaDePosts = this.state.arrayDePosts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    })
      
      return(
        <div className={"app-container"}>
          <div>
            <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder='Digite seu usuário'
            />

           <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder='Sua foto de perfil'
            />

          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder='Digite seu usuário'
            />

          <button onClick={this.acidiconaPost}>Enviar</button>
          </div>
      

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
