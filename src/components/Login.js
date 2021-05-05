import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginFormData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
      }

      const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
      }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={loginFormData.email} name="email" onChange={handleInputChange}/>
            <input type="text" placeholder="password" value={loginFormData.password} name="password" onChange={handleInputChange}/>
            <input type="submit" value="Login"></input>
        </form>
    )
}
const mapStateToProps = state => {
    return {
        // grabs whole form as a prope instead of each input individually
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login) 