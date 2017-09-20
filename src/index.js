import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counter from './reducerCounter'

import { createStore } from 'redux'


const store = createStore(counter)

const render = () => {
    ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
}

render();

store.subscribe(render);

registerServiceWorker();
