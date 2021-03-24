import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import User from './components/User.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import axios from 'axios';


export default class App extends Component {

  state = {}

  componentDidMount = () => {
    if (this.props.user) {
      axios.get('users/{this.props.user.id}').then(
        res => {
          this.setUser(res.data)
        },
        err => {
          console.log(err)
        }
      )
    }
  };

  setUser = user => {
    this.setState(
      {
        user: user
      }
    )
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.user} setUser={this.setUser} />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user} />} />
                <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/user" component={() => <User setUser={this.setUser} user={this.state.user} />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
