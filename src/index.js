import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import FirstPage from './FirstPage';
import ChatContainer from './ChatContainer';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import chatApp from './reducer';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const router = (
    <MuiThemeProvider>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/root" component={FirstPage} />
                <Route exact path="/chat" component={ChatContainer} />
            </div>
        </Router>
    </MuiThemeProvider>
);

const reducer = chatApp;

const store = createStore(reducer, applyMiddleware(thunk));

// store.dispatch({ type: 'COMP_ADD_MESSAGE', message: 'hello' });
// store.dispatch({ type: 'COMP_ADD_MESSAGE', message: 'bye' });
// store.dispatch({ type: 'USER_ADD_MESSAGE', message: 'test' });

// console.log(store.getState());

const provider = <Provider store={store}>{router}</Provider>;

ReactDOM.render(provider, document.getElementById('root'));
// registerServiceWorker();
