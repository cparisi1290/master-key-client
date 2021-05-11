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
import PropertyCard from './components/PropertyCard';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    const { loggedIn, properties } = this.props
    return (
      <div className="App">
        {loggedIn ? <NavBar location={this.props.location}/> : <Home/>}
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={(props) => loggedIn ? <MyProperties {...props}/> : <Home {...props}/>}/>
          <Route exact path='/properties' component={MyProperties}/>
          <Route exact path='/properties/new' component={NewPropertyForm}/>
          <Route exact path='/properties/:id' render={props => {
          // must pass prop to property card
              // find property obj from params in match in props
              const property = properties.find(property => property.id === props.match.params.id)
              console.log(property)
              return <PropertyCard property={property} {...props}/>
            }
          }/>
        </Switch>
      </div>
    // <Footer/>
    // { loggedIn ? <Logout /> : null}

    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    properties: state.myProperties
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
