import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers/'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'
  
/*
creates a store with middlewares
*/

export default function configureStore(initialState) {
    const logger = createLogger()
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger));

    return store
}