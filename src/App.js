import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <div className= "Navlink">
          <NavLink exact to="/" activeClassName="selected" className="link"> Home </NavLink>
          <NavLink to="/notre-histoire" activeClassName="selected" className="link"> History </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
