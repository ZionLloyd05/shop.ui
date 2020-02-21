import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction';


class Navbar extends Component {

    onLogoutClick = (e) => {
      e.preventDefault();
      this.props.logoutUser();
    }
    render() {
        
        const { isAuthenticated } = this.props.auth;

        const authLinks = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/user-cart" className="nav-link text-white">My Cart</Link>
            </li>
            <li className="nav-item">
              <p href="" onClick={this.onLogoutClick} className="nav-link logout">Logout</p>
            </li>
          </ul>
        );

        const guestLinks = (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        );
        return (
            //  Navbar 
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container">
                <Link className="navbar-brand" to="/">Mock Shop Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                  <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="mobile-nav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="profiles.html"> For You
                      </a>
                    </li>
                  </ul>

                  {isAuthenticated ? authLinks : guestLinks}
                  
                </div>
              </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {logoutUser})(withRouter(Navbar));