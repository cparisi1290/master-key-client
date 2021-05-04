import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from '.reducers/currentUser'

const reducer = combineReducers({
    users,
    currentUser
})
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
export default store