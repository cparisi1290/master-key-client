import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout';

// functional component
const NavBar = ({currentUser}) => {

    return (
        <div className="NavBar">
            {currentUser ? <h2>Welcome Back, {currentUser.attributes.name}!</h2> : ""}
            <button>Login</button> 
            <button>Signup</button>
        </div>
    )
}
// {currentUser ? <Logout/> : <Login/>}

// incoming arg is an obj, state, coming from redux,  which has a property called currentUser
// state = { ...,
//    currentUser: {
//      name,
//      value
//  }
// }
const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
}

export default connect(mapStateToProps)(NavBar) 