import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
<Auth0Provider
    domain="dev-r5zk1vpi6n22nap8.us.auth0.com"
    clientId="NxvHpFOa8f8dd8fHjy3tp6IY6hK4M5s0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App />
  </Auth0Provider>,


document.querySelector('#root'));
