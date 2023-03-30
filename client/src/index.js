import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from "@auth0/auth0-react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider domain="dev-djdoxyjd8enbjvc0.us.auth0.com" clientId="reZLlsAzyphxoW7nnbHWgq4zmE0zwgU6" redirectUri={window.location.origin}><App /></Auth0Provider>
  
 
);


