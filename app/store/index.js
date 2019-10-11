import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

// const rootReducer = (state = {}, action) => {
//     return state
// }

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
)

export default store;