import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import configs from 'configs';
import { testPromiseFailure, testPromiseSuccess } from 'redux/actions/app.action';

import logo from 'assets/images/logo.svg';
import 'assets/css/App.css';

export class App extends React.Component {
  render() {
    const { testPromiseFailure, testPromiseSuccess } = this.props;
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
                <button onClick={testPromiseSuccess}>Test redux success</button>
                <button onClick={testPromiseFailure}>Test redux failure</button>
              </header>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = {
  testPromiseFailure,
  testPromiseSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
