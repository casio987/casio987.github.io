import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const site = (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

ReactDOM.render(site, document.getElementById("root"));