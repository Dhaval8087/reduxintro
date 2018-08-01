import React, { Component } from 'react';
import List from '../src/components/List';
import ItemList from '../src/components/ItemList';
import ConnectedForms from '../src/components/Form'
import logo from './logo.svg';
import './App.css';
import { addArtical } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
   console.log(this.props.store);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ItemList />
       
      </div>
    );
  }
}

export default App;
