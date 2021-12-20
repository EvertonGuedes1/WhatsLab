import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  border: 1px solid black;
  height: 97vh;
  box-sizing: border-box;
  width: 98vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`

const MessagesContainer = styled.div`  
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`
const InputsContainer = styled.div`
  display: flex;
`

const NameInput = styled.input`
  width: 100px;
`

const MessageInput = styled.input`
  flex-grow: 1;
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          <p>
            <strong>Maria</strong>: Olá!
          </p>
          <p>
            <strong>João</strong>: Olár!
          </p>
        </MessagesContainer>
        <InputsContainer>
          <NameInput placeholder={"Nome"} />
          <MessageInput placeholder={"Mensagem"} />
          <button>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;
