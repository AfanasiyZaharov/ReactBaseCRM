import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Header from '../Components/Header.js'
import Clients from '../Components/Clients'

import { bindActionCreators } from 'redux'

import * as clickActions from '../Actions/clickClientAction'
import * as loading from '../Actions/clientLoading'

import { connect } from 'react-redux'



//root component of application
class App extends Component {

  componentDidMount () {
    this.props.loading.loadingClients();
  }
  render() {

    const { DisplayId } = this.props.clickActions
    const { clients } = this.props
    return (

      <div className="App">
        <Clients clients={clients} clientClick={DisplayId} />
      </div>
    );
  }
}

// linking react app to redux
function mapStateToProps(state) {
  return {
    clients: state.clients
  }
}


function mapDispatchToProps(dispatch) {
  return {
    clickActions: bindActionCreators(clickActions, dispatch),
    loading: bindActionCreators(loading, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

