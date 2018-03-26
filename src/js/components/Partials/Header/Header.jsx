
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import MainMenu from './MainMenu'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header id="main-header">
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <Link to="/" className="navbar-brand">Logo</Link>
                        <MainMenu />
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header
