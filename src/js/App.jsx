
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Partials/Header'
import Footer from './components/Partials/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

// Get styles from npm
import 'bootstrap/dist/css/bootstrap.css'

// Get custom styles
import '../sass/main.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                
            <Router>
                <div id="page-wrapper">
                    
                    <Header />
                        <div className="container">
                            <Route exact path="/" component={ Home } />
                            <Route path="/about" component={ About } />
                            <Route path="/contact" component={ Contact } />
                        </div>
                    
                    <Footer />
                
                </div>
            </Router>
        )
    }
}

export default App
