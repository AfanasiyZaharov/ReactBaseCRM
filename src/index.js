import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker'
import { Router, Route,  browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configurateStore from './Store/ConfigureStore'
import { Provider } from 'react-redux'

import  ClientEdit from './Containers/clientEdit'

const store = configurateStore()


const history = syncHistoryWithStore(browserHistory, store)
/*
    register root component and Router
*/
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/client/edit/:clientId" component={ClientEdit} />
                <Route path="/client/add/" component={ClientEdit} />
            </Router>
        </Provider>,


        document.getElementById('root'));
}

render();


registerServiceWorker();
