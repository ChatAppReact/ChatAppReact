import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class ChatEnded extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">The chat is now over. Please close this browser window.</h1>
      </div>
    );
  }
}

export default ChatEnded;
