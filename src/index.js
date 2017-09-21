import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

import configurateStore from './Store/ConfigureStore'
import { Provider } from 'react-redux'


const store = configurateStore()

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
