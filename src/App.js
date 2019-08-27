import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './navBar';
import NotFoundPage from './pages/404';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
              
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;