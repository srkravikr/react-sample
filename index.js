import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Hello from './Hello';
import './style.css';
import Bootstrap from 'Bootstrap/dist/css/Bootstrap.min.css';
import App from './Components/App/App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));
