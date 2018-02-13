import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Chat Application</h1>
          <Redirect to="/root"/>
      </div>
    );
  }
}

export default App;
