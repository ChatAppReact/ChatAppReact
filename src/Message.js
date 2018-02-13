import React from 'react';
import Paper from 'material-ui/Paper';

const userStyle = {
    // height: 100,
    // width: 100,
    backgroundColor: 'green',
    // marginTop: 5,
    // marginBottom: 5
    margin: 5,
    padding: 5
    // textAlign: 'center',
    // display: 'inline-block',
};

const compStyle = {
    backgroundColor: 'yellow',
    margin: 5,
    padding: 5
};

const systemStyle = {
    backgroundColor: 'red',
    margin: 5,
    padding: 5
};

class Message extends React.Component {
    render() {

        if (this.props.person === 'comp') {
            return <Paper style={compStyle} zDepth={1} >PARTNER: {this.props.message}</Paper>;
        } else if (this.props.person === 'user') {
            return <Paper style={userStyle} zDepth={1} >YOU: {this.props.message}</Paper>;
        } else if (this.props.person === 'system') {
            return <Paper style={systemStyle} zDepth={1} >{this.props.message}</Paper>;
        }
    }
}

export default Message;