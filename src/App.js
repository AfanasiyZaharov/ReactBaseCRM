import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header.js'




//root component of application
class App extends Component {

  increaseVersion(){
    this.props.store.dispatch({type:'INCREMENT'});
  }

  render() {
    
    const { store } = this.props;
    console.log(store);
    const {version } = store.getState();
    console.log(version);
    return (

      <div className="App">
        <Header version={version} />
        <button type="button" className="btn btn-default" onClick = {this.increaseVersion.bind(this)}>Update Version</button>
      </div>
    );
  }
}

export default App;
