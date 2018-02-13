import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class ChatOutput extends React.Component {

    scrollToBottom;
    messageEnd;

    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const chatItems = this.props.chat.map((item, index) => {
            return <Message key={index} person={item.person} message={item.text} />
        });

        return (
            <div className="chat-output">
                <div>Message:</div>
                <div>{chatItems}</div>
                <div ref={ el => this.messageEnd = el }></div>
            </div>
        );
    }

    scrollToBottom() {
        this.messageEnd.scrollIntoView({ behavior: "smooth" });
    }
}

function mapStateToProps(state) {
    return {
        chat: state.chat
    }
}

export default connect(mapStateToProps)(ChatOutput);