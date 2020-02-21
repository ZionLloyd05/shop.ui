import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Landing extends Component {

    render() {

        let salutaion = '';

        if(this.props.auth.isAuthenticated) {
            salutaion = this.props.auth.user.username;
        }else{
            salutaion = 'Friend';
        }

        return (
            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                    <h1 className="display-5 mb-4">Hi, {salutaion}</h1>
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
Landing.propType = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(Landing));
