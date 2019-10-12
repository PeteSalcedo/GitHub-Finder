import React, { Component} from 'react';
import UserItem from './components/Users/Useritems'

import './App.css';

import Navbar from "./components/Layout/NavBar"


class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
      <UserItem />
    </div>
  );
}
}

export default App;
