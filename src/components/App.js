import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import configs from 'configs';

import logo from 'assets/images/logo.svg';
import 'assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" component={null} />
          <Route path="/about" component={null} />
          <Route path="/" exact>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>{`App name: ${configs.appName}`}</p>
              <p>{`API URL: ${configs.apiUrl}`}</p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
