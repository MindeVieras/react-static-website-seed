
import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>React | Kit</title>
            </Helmet>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">React Seed</h1>
                    <p className="lead text-muted">
                        This is starter kit is build on React. It contains Webpack, Babel, Styles and Files loader.
                    </p>
                    <p>
                        <Link to="/contact" className="btn btn-primary my-2">Contact</Link>
                        <Link to="/about" className="btn btn-secondary my-2">About</Link>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
