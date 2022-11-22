
import './App.scss';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
