import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import configs from 'configs';
import { testPromiseFailure, testPromiseSuccess } from 'redux/actions/app.action';

import logo from 'assets/images/logo.svg';
import 'assets/css/App.css';

export class App extends React.Component {
  getSuccess = () => {
    const { testPromiseSuccess } = this.props;
    testPromiseSuccess()
      .then((res) => {
        if (res.success) {
          console.log('OK', res);
        } else {
          console.log('NOT OK', res);
        }
      });
  }

  getFailure = () => {
    const { testPromiseFailure } = this.props;
    testPromiseFailure()
      .then((res) => {
        if (res.success) {
          console.log('OK', res);
        } else {
          console.log('NOT OK', res);
        }
      });
  }

  render() {
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
                <button onClick={this.getSuccess}>Test redux success</button>
                <button onClick={this.getFailure}>Test redux failure</button>
              </header>
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  testPromiseSuccess: PropTypes.func,
  testPromiseFailure: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = {
  testPromiseFailure,
  testPromiseSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
