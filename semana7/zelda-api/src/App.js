import React from "react";
import axios from "axios";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-image: url("https://i.pinimg.com/564x/61/31/44/613144c457c048e6c071bd6d73cce985.jpg");
  justify-content: center;
  display: block;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  padding: 0;
  `;

class  App extends React.Component {

  state = {
    gamesList: [],
    charactersList: [],
    bossesList: [],
    monstersList: []
  }

  render() {

  return (
    <HomeContainer>
      <h2>Algumas informações Gerais sobre os jogos da Franquia The Legend Of Zelda</h2>
      <h4>Jogos:</h4>
      <select>
      <option>jogo1</option>
      </select>
      <h4>Personagens:</h4>
      <select>
      <option>personagem1</option>
      </select>
      <h4>Chefes:</h4>
      <select>
      <option>chefe1</option>
      </select>
      <h4>Monstros:</h4>
      <select>
      <option>monstro1</option>
      </select>
      
    </HomeContainer>
  );
}
}

export default App;
