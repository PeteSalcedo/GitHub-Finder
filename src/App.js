import React, { Component } from "react";
import Navbar from "./components/Layout/NavBar";
import Users from "./components/Users/Users";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    users:[],
    loading:false
  }
  async componentDidMount() {
    this.setState({loading:true});
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
    this.setState({users:res.data,loading:false})
  }
  render() {
    return (
      <div className="App">
        <Navbar icon="fas fa-cat" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>{" "}
      </div>
    );
  }
}

export default App;
