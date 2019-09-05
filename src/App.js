import React, { Component } from 'react'
import HomePage from './components/HomePage'
import AddNewEmployee from './components/AddNewEmployee'
import Employees from './components/Employees'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Welcome to Twisser</h1>
        <Link className="link-home" to="/">
          Home Page!
        </Link>
        <Link className="link-emp" to="/add">
          ADD+
        </Link>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/add" component={AddNewEmployee} />
          <Route exact path="/:employee" component={Employees} />
        </Switch>
      </Router>
    )
  }
}

export default App
