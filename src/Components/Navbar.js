import React from 'react'
import{Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div >
        <div className='navbar_container'>
          <Link to= '/about'>Sobre mi </Link>
        </div>
        <div>
          <Link to= '/projects'>Proyectos</Link>
        </div>
        <div>
          <Link to= '/contact'> Contacto</Link>
        </div>
    </div>
  )
}

export default Navbar