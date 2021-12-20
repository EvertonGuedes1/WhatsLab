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
  state = {
    messages: [
      {
        user: "Marco",
        text: "yo!"
      },
      {
        user: "João",
        text: "Olar!"
      },
      {
        user: "Maria",
        text: "Olá!"
      },
      {
        user: "Dalsin",
        text: "Eu tava na porta, chefe"
      }
    ],
    userValue: "",
    messageValue: ""
  }

  onChangeUserValue = (event) => {
    this.setState({ userValue: event.target.value })
  }

  onChangeMessageValue = (event) => {
    this.setState({ messageValue: event.target.value })
  }

  render() {

    return (
      <AppContainer>
        <MessagesContainer>
          {this.state.messages.map((message) => {
            return <p>
              <strong>{message.user}</strong>: {message.text}
            </p>
          })}

        </MessagesContainer>
        <InputsContainer>
          <NameInput
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder={"Nome"} />
          <MessageInput
            onChange={this.onChangeMessageValue}
            value={this.state.messageValue}
            placeholder={"Mensagem"} />
          <button>Enviar</button>
        </InputsContainer>
      </AppContainer>
    );
  }
}

export default App;
