import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './imagens/perfil.jpeg';
import LogoEmail from './imagens/gmail.png';
import LogoEndereco from './imagens/endereco.png';
import LogoDesigner from './imagens/designer.png';
import LogoPasta from './imagens/pasta.png';
import LogoInstagram from './imagens/instagram.png';
import LogoFacebook from './imagens/facebook.png';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPerfil} 
          nome="Rafaela Quinzel" 
          descricao="Olá, eu sou a Rafaela. Sou aluna da Labenu. Estou estundando programação e dandos os primeiros passos para a minha transição de carreira para a área de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardPequeno 
          imagem={LogoEmail} 
          nome="Email:" 
          descricao="estudantelabenu@gmail.com"
        />

        <CardPequeno 
          imagem={LogoEndereco} 
          nome="Endereço:" 
          descricao="Avenida Chuí, n 121 - Porto Alegre/RS"
        />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={LogoDesigner} 
          nome="Designer e ilustração" 
          descricao="Sou ilustradora nas horas vagas. Fazia mais desenhos no papel e hoje aderi ao desenho digital. Fiz também alguns trabalhos como designer, mas foi por um curto período." 
        />
        
        <CardGrande 
          imagem={LogoPasta} 
          nome="Administrativo" 
          descricao="Iniciei no mercado de trabalho na área de vendas internas. Algum tempo depois, tive uma oportunidade na área administrativa e foi onde trabalhei até decidir mudar de carreira." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={LogoInstagram} 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem={LogoFacebook}
          texto="Facebook" 
        />        
      </div>
    </div>
  );
}

export default App;
