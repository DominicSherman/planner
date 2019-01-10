import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import AppContainer from './AppContainer';

const store = createStore(reducer, applyMiddleware(thunk));

const App = withRouter(AppContainer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
