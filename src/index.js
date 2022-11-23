import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1> Este es el nuevo portfolio</h1>
   <React.StrictMode>
    <App />
    <BrowserRouter>
     <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
   </React.StrictMode>
);


