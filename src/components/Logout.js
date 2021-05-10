import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'

// destructor
const Logout = ({logout, history}) => {

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push("/")
            }
        }>
            <input type="submit" value="Logout"></input>
        </form>
    )
}

export default withRouter(connect(null, {logout})(Logout))