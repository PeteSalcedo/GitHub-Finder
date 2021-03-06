import React, { Component } from "react";
import Navbar from "./components/Layout/NavBar";
import Users from "./components/Users/Users";
import Search from "./components/Users/search";
import Alert from './components/Layout/Alert'

import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });
    setTimeout(() => this.setState({alert:null}), 5000)
  };

  render() {
    return (
      <div className="App">
        <Navbar icon="fas fa-cat" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />{" "}
        </div>
      </div>
    );
  }
}

export default App;
