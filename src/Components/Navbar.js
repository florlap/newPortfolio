import React from 'react'
import{Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='container_navbar'>
        <div>
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