import React from 'react';
import logo from '../../assets/logo.svg';
import Form from '../Form';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    {/* Form exercise */}
    <Form />
  </div>
);

export default App;
