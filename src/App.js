import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lane1 demo application</h1>
      </header>
      <h4>- React application</h4>
      <h4>- GitHub integration</h4>
      <h4>- Continous deploy with AWS AMPLIFY</H4>
    </div>
  );
}

export default App;