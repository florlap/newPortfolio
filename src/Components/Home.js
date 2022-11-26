
import React from 'react'
import About from './About'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
  
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
  )
}

export default Home