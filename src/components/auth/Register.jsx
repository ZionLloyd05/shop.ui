import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            cpassword: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            ...this.state
        };

        this.props.registerUser(newUser, this.props.history);        
    }
    
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('here');
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    render() {

        let { errors } = this.state;

        if(errors.data){
            errors = errors.data;
        }

        const { user } = this.props.auth;

        return (
            <div className="register">
                {user ? user.firstname : null}
                <div className="row pt-5">
                    <div className="col-md-8 m-auto">
                    <h2 className="display-5 text-center">Let's set you up!</h2>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                                className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.firstname
                                })} 
                                placeholder="Firstname" 
                                name="firstname" 
                                required 
                                value={this.state.firstname}
                                onChange={this.onChange}
                            />
                            {errors.firstname && (<div className="invalid-feedback">{errors.firstname}</div>)}
                        </div>
                        <div className="form-group">
                            <input type="text" 
                                 className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.lastname
                                })} 
                                placeholder="Lastname" 
                                name="lastname" 
                                required 
                                value={this.state.lastname}
                                onChange={this.onChange}
                            />
                            {errors.lastname && (<div className="invalid-feedback">{errors.lastname}</div>)}
                        </div>
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
                        <div className="form-group">
                            <input type="password" 
                                 className={classnames('form-control form-control-lg', {
                                    'is-invalid': errors.cpassword
                                })} 
                                placeholder="" 
                                name="cpassword"
                                required 
                                value={this.state.cpassword}
                                onChange={this.onChange}
                            />
                            {errors.cpassword && (<div className="invalid-feedback">{errors.cpassword}</div>)}
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" value="Register"/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
