import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Container from './container.js';
import { BrowserRouter } from 'react-router-dom';
import MyStore from './myStore.js';
import Maps from './map.js';
ReactDOM.render((
    <BrowserRouter>
      <Container />
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();
