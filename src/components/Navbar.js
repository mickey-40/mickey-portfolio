import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolder, faAtom, faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const[expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation()
//Use so the menu retracks
  useEffect(()=>{
    setExpandNavbar(false)
  }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
          <FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className='links'>
        <div></div>
        <FontAwesomeIcon icon={faHouse} />
        <Link to="/">Home</Link>
        <FontAwesomeIcon icon={faFolder} />
        <Link to="/projects">Projects</Link>
        <FontAwesomeIcon icon={faAtom} />
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  )
}

export default Navbar