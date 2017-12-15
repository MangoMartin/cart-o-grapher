import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Container from './Nav';
import { BrowserRouter } from 'react-router-dom';
import MyStore from './StoreProfile';

ReactDOM.render((
    <BrowserRouter>
      <Container />
    </BrowserRouter>
),document.getElementById('root'));
registerServiceWorker();
