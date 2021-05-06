import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myProperties from './reducers/myProperties'

const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    myProperties,
    signupForm
})
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
export default store