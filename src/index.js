import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './functionBased/App.css';
import App from './functionBased/App';

// component file
// ReactDOM.render(
// <React.StrictMode>
// <TodoContainer />
// </React.StrictMode>,
// document.getElementById("root"))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
