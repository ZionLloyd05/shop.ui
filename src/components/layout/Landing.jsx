import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                    <h1 className="display-3 mb-4">Hello, Friend</h1>
                    <p className="lead text-muted">We've got so much more in stock just for you today.</p>
                    <hr />
                    <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
                    <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                    </div>
                </div>

            </main>

        )
    }
}

export default Landing;
