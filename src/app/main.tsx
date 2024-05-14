import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { Header } from '../components/index.ts';

import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='app-container'>
        <div className='app-content'>
          <Header />
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
