import React, { Component } from "react";
import ReactDOM from "react-dom";
import Login from "./Login.js";
import Profile from "./Profile.js";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: "",
      profile: {},
      userFollowers: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({ loggedIn: true, profile: data }));
  }

  handleLogOut() {
    this.setState({ loggedIn: false });
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubFollowing(url) {
    return fetch(url);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedIn !== this.state.loggedIn) {
      if (this.state.loggedIn) {
        this.getGithubFollowing(this.state.profile.followers_url)
          .then(res => res.json())
          .then(data => this.setState({ userFollowers: data }));
      } else {
        this.setState({ profile: {}, username: "" });
      }
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Github Developer</h1>
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            userFollowers={this.state.userFollowers}
            handleLogOut={this.handleLogOut}
          />
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
