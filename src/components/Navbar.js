import React from 'react'           
import PropTypes from 'prop-types'      // impt shortcut
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{props.aboutText}</Link>
                            </li>
                        </ul>

                        {/* Toggle switch */}
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode ==='light'? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">Enbale Dark Mode</label>
                        </div>
                    </div>
                </div>
                
            </nav>
    );
}

Navbar.propTypes = {        // pts shortcut 
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {     // defp shortcut
    title: "Set title here",
    aboutText: "About"
}

