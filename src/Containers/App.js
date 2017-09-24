import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Header from '../Components/Header.js'
import Clients from '../Components/Clients'
import Header from '../Components/Header'


import { bindActionCreators } from 'redux'

import * as loading from '../Actions/clientLoading'

import { connect } from 'react-redux'



//root component of application
class App extends Component {


  //now I removed it, because it ruined an state in routing
  componentDidMount() {
   // console.count('we loading');
    //this.props.loading.loadingClients();
  }
  render() {

    const { ownProps } = this.props
    console.log('own', ownProps)
    const { clients } = this.props
    return (

      <div className="App">
        <Header />
        <Clients clients={clients} />
      </div>
    );
  }
}

// linking react app to redux
function mapStateToProps(state, ownProps) {
  return {
    clients: state.clients,
    ownProps
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loading: bindActionCreators(loading, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

