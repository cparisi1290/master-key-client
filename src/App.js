import './App.css';
import React from 'react';
import Login from './components/Login';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import Logout from './components/Logout';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      this.props.currentUser ? <Logout/> : <Login/>
    );
  }
}

// incoming arg is an obj, state, coming from redux,  which has a property called currentUser
// state = { ...,
//    currentUser: {...}
// }
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
