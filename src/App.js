
import './App.scss';
// import About from './Components/About';
// import Footer from './Components/Footer';
 import Home from './Components/Home';
// import Navbar from './Components/Navbar';


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      
       {/* <div>
        <Navbar/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>   */}
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
