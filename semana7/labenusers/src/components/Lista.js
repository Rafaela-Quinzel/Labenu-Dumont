import React from "react";
import styled from "styled-components";


const ListaContainer = styled.div`
  border: 1px solid black;
  padding: 50px;
  width: 20vw;
  margin: 5vw 35vw;
`


class Lista extends React.Component {

  render() {
  return (
    <ListaContainer>
        <h1>Usuários Cadastrados:</h1>
      <p></p>
    </ListaContainer>
   
  );
}
}

export default Lista;
