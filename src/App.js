import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar';
// import MainContainer from './components/MainContainer';
import Home from './components/Home';
import Login from './components/Login';
// import Logout from './components/Logout';
import Signup from './components/Signup';
import MyProperties from './components/MyProperties';
import NewPropertyForm from './components/NewPropertyForm';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar location={this.props.location}/> : <Home/>}
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={(props) => loggedIn ? <MyProperties {...props}/> : <Home {...props}/>}/>
          <Route exact path='/properties' component={MyProperties}/>
          <Route exact path='/properties/new' component={NewPropertyForm}/>
        </Switch>
      </div>
    // <Footer/>
    // { loggedIn ? <Logout /> : null}

    );
  }
}

const mapStateToProps =state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
