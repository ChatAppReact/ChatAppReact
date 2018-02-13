import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class FirstPage extends React.Component {
    render() {
        const style = { margin: 12 };
        const label = "Click here to talk to your partner";

        return (
            <div className="first-page-wrapper">
                <Link to="/chat">
                    <RaisedButton label={label} primary={true} style={style} />
                </Link>
            </div>
        );
    }
}

export default FirstPage;