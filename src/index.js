import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1> Este es el nuevo portfolio</h1>
   <React.StrictMode>
    <App />
   </React.StrictMode>
);


