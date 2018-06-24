import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './assets/style.css';
import Game from './Game';
import GameApp from './reducers';

const store = createStore(
    GameApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <Game/>
    </Provider>,
    document.getElementById('root')
);