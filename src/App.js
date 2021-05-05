import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';
import NavBar from './components/NavBar'
import MainContainer from './components/MainContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContainer/>

      </div>
      // <Footer/>

    );
  }
}

export default connect(null, {getCurrentUser})(App);
