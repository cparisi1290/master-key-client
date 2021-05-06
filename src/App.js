import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import MyProperties from './components/MyProperties';
import { Route } from 'react-router-dom';


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Logout/>
        <MainContainer/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/properties' component={MyProperties}/>
      </div>
    // <Footer/>

    );
  }
}

export default connect(null, {getCurrentUser})(App);
