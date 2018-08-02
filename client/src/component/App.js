import React, { Component } from 'react';
import { ThemeProvider, TextComposer, TextInput, SendButton, Row, defaultTheme, MessageList } from '@livechat/ui-kit';
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
    const request_timestamp = new Date(Date.now());

    this.setState({
      conversations: [...this.state.conversations, {
        isOwn: true,
        user_input,
        request_timestamp
      }]
    });

    try {
      const response = await ApiClient.sendMessage(user_input);
      this.setState({
        conversations: [...this.state.conversations, {
          isOwn: false,
          bot_response: response.bot_response,
          response_timestamp: new Date(response.response_timestamp)
        }]
      });
    } catch (err) {
      alert(err.message);
    }
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
              <div style={{ height: 800 }}>
                <MessageList active>
                  {this.state.conversations.map(c => {
                    return (<Conversation conversation={c}> </Conversation>)
                  })}
                </MessageList>
              </div>
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
