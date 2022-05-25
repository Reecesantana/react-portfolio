import './index.scss'

import { Link, NavLink } from 'react-router-dom'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser, faWater } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => (
    
    <div className="nav-bar">
        <Link className="logo" to="/">
            <FontAwesomeIcon icon={faWater} />
        </Link>
    <nav className='links'>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon ={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon ={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon ={faCode} />
        </NavLink>
        
    </nav>  


    </div> 


)

export default Navbar