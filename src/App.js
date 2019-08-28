import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import NavBar from './component/navBar';
import NotFoundPage from './pages/404';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            
            <Switch>
              <Route path="/404" component={NotFoundPage} exact />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>

          </div>
        </div>
      </Router>
    )
  }
}

export default App;