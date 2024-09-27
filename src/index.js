import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStateForViewCar } from './components/GlobalStateForViewCarShop';
import { GlobalStateProvider } from './components/GlobalStateForProducts';

if (window.ResizeObserver) {
  const resizeObserverErrorHandler = e => {
    e.preventDefault(); 
  };
  window.addEventListener('error', resizeObserverErrorHandler);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateForViewCar>
      <GlobalStateProvider>
          <App />
      </GlobalStateProvider>
    </GlobalStateForViewCar>
  </React.StrictMode>
);
