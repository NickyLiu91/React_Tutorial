import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paragraph from './paragraph.js';
import Number from './number.js';
import Form from './form.js';

function App() {

  return (
    <div className="App">
      <Paragraph />
      <Paragraph />
      <Paragraph />
      <Number />
      <Form />
    </div>
  );
}

export default App;
