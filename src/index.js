import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Header from './Components/Header'
import configurateStore from './Store/ConfigureStore'
import { Provider } from 'react-redux'

import  ClientEdit from './Containers/clientEdit'

const store = configurateStore()


const history = syncHistoryWithStore(browserHistory, store)
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/client/:clientId" component={ClientEdit} />
                <Route path="header" component={Header} />
            </Router>
        </Provider>,


        document.getElementById('root'));
}

render();

//store.subscribe(render);

registerServiceWorker();
