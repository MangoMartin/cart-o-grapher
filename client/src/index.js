import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Container from './Nav';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render((
	<CookiesProvider>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
     </CookiesProvider>
),document.getElementById('root'));
registerServiceWorker();
