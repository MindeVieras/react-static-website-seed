
import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => {
    return (
        <ul className="nav float-right">
            <li className="nav-item">
                <Link to="/about" className="nav-link active">About</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link active">Contact</Link>
            </li>
        </ul>
    )
}

export default MainMenu
