import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout';
import { Button } from 'react-bootstrap'

// functional component
const NavBar = ({currentUser, loggedIn}) => {

    return (
        <div className="NavBar">
            <h4><NavLink exact activeClassName="active" to="/properties"><Button>Properties</Button></NavLink></h4>
            <h4><NavLink exact activeClassName="active" to="/properties/new"><Button>Add Property</Button></NavLink></h4>
            { loggedIn ? <Logout/> : null}

        </div>
    )
}

// {currentUser ? <Logout/> : <Login/>}
// {currentUser ? <h2>Welcome Back, {currentUser.attributes.name}!</h2> : ""}

// incoming arg is an obj, state, coming from redux,  which has a property called currentUser
// state = { ...,
//    currentUser: {
//      name,
//      value
//  }
// }
const mapStateToProps = ({currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar) 