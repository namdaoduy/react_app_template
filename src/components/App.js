import React from 'react';
import logo from 'assets/images/logo.svg';
import 'assets/css/App.css';
import configs from 'configs';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
