import React from 'react';
import styled from "styled-components"
import './App.css';
import Post from './components/Post/Post';
// import Compartilhar from './components/Compartilhar/Compartilhar';


const Botao = styled.button`
    color: whitesmoke;
    background-color: yellowgreen;
    padding: 5px 10px;
     :active {
    background-color: green;
  }
`
const Input = styled.input`
     padding: 5px 10px;
`

class App extends React.Component {
  state = {
    arrayDePosts: [{
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://i.pinimg.com/564x/df/99/56/df99567db2315d0a37e631a243387adc.jpg',
      fotoPost: 'https://i.pinimg.com/564x/56/51/d1/5651d16087b9e44f041fe7d5a6e72dfd.jpg',
    },
    { nomeUsuario: 'Amanda',
      fotoUsuario: 'https://i.pinimg.com/564x/7e/9d/57/7e9d57361597a3577cec13e12bfb4965.jpg',
      fotoPost: 'https://i.pinimg.com/564x/47/95/79/4795795a5d12fa1c5f1b40e2470404d6.jpg',
    },

    { nomeUsuario: 'João Pedro',
      fotoUsuario:'https://i.pinimg.com/564x/28/09/6b/28096bfa0321343d3b14ff89164e5eb5.jpg',
      fotoPost: 'https://i.pinimg.com/564x/f5/e9/29/f5e929843945be7e6e57f4ecde686b9c.jpg',
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

  const novosPosts = [novoPost, ...this.state.arrayDePosts];
  this.setState({arrayDePosts: novosPosts});
  this.setState({valorInputFotoUsuario: "" });
  this.setState({valorInputFotoUsuario: "" });
  this.setState({valorInputFotoPost: "" });
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
          <Input
          value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder='Digite seu usuário'
          />

         <Input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder='Sua foto de perfil'
          />

        <Input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder='Link do post'
          />
        
        <Botao onClick={this.adicionarPost}>Enviar</Botao>
        
        </div>
        
        <div>{listaDePosts}</div>
    
      </div>
    );
  }
}

export default App;
// onClick={this.adicionarPost}