import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Message from './Message';
import ChatInput from './ChatInput';
import ChatOutput from './ChatOutput';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class ChatContainer extends Component {

  render() {
    return (
      <div className="ChatContainer">
        <Link to="/root">
          <RaisedButton label="Close" secondary={true} />
        </Link>
        <ChatOutput />
        <ChatInput />
      </div>
    );
  }
}

export default connect(state=> state)(ChatContainer);
