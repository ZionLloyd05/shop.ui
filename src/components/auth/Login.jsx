import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import { connect } from 'react-redux';
import {loginUser} from '../../actions/authAction';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData)
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/');
        }
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        let { errors } = this.state;

        if(errors.data){
            errors = errors.data;
        }

        return (
            <div className="login">
            <div className="row pt-5">
                <div className="col-md-8 m-auto">
                <h2 className="display-5 text-center">Hey, welcome back!</h2>
                <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="email" 
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.email
                                })} 
                                placeholder="Email Address" 
                                name="email"
                                required 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.password
                                })} 
                                placeholder="" 
                                name="password"
                                required 
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                        </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" value="Login" />
                </form>
                </div>
            </div>
        </div>
        )
    }
}

Login.propType = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(mapStateToProps, {loginUser})(withRouter(Login));