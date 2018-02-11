import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Container from './Nav';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD:client/src/index.js
import { CookiesProvider } from 'react-cookie';
=======
>>>>>>> d50484143dadda75065a8317f6a21e275bd0d636:client/src/index.js

ReactDOM.render((
	<CookiesProvider>
    <BrowserRouter>
      <Container />
    </BrowserRouter>
     </CookiesProvider>
),document.getElementById('root'));
registerServiceWorker();
