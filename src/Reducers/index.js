import { combineReducers } from 'redux'
import clients from './clients'
//import user from './user'

import { routerReducer } from 'react-router-redux'


//combined reducers
export default combineReducers({
    routing: routerReducer,
    clients
});