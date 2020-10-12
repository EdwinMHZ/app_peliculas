import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const icono= <FontAwesomeIcon icon={faVideo}/>
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">InfoMovie { icono }</Link>
        </nav>
    );
}

export default Navbar;