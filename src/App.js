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
        <Route exact path="/" component={HomePage} />
        <Link className="link-home" to="/">
          Home Page!
        </Link>
        <Link className="link-emp" to="/add-employee">
          ADD+
        </Link>
        <Link to="/employees">Twisser Employees</Link>
        <Route exact path="/employees" component={Employees} />
        <Route exact path="/add-employee" component={AddNewEmployee} />
      </Router>
    )
  }
}

export default App
