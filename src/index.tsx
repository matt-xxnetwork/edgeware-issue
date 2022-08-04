import React from 'react';
import ReactDOM from 'react-dom';

import { Api } from '@polkadot/react-api';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Api url={process.env.REACT_APP_API_URL}>
      <App />
    </Api>
  </React.StrictMode>,
  document.getElementById('root')
);

