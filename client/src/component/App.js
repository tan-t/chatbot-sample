import React, { Component } from 'react';
import { ThemeProvider, TextComposer, TextInput, SendButton, Row, defaultTheme } from '@livechat/ui-kit';
import Conversation from './Conversation';
import ApiClient from '../module/ApiClient';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      conversations: []
    };
  }
  onClickSend = async (e) => {
    const user_input = this.state.text;
    let response = await ApiClient.sendMessage(user_input);
    this.setState({
      conversations: [...this.state.conversations, {
        user_input,
        bot_response: response.bot_response,
        response_timestamp: new Date(response.response_timestamp),
        request_timestamp: new Date()
      }]
    });
  }
  updateValue(value) {
    this.setState({text:value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chat Bot</h1>
        </header>
        <div>
          <ThemeProvider theme={defaultTheme}>
            <div>
            <Conversation conversations={this.state.conversations}> </Conversation>
            <TextComposer onChange={(e) => this.updateValue(e.target.value) } onSend={(e) => this.onClickSend(e)}>
              <Row align="center">
                <TextInput onKeyDown={(e) => console.log(e) }/>
                <SendButton fit/>
              </Row>
            </TextComposer>
            </div>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
