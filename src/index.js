import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

//import counter from './reducerCounter'
import storeClients from './Reducers/index.js'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store = createStore(storeClients)

const render = () => {
    ReactDOM.render(
        <Provider store={store}>

            <App />
        </Provider>,


        document.getElementById('root'));
}

render();

//store.subscribe(render);

registerServiceWorker();
