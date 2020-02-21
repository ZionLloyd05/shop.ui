import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import TextFieldGroup from '../common/TextFieldGroup';

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
            if(this.props.auth.isAuthenticated && this.props.auth.user.isadmin) {
                console.log("admin");
                this.props.history.push('/dashboard');
            }else if(this.props.auth.isAuthenticated && !this.props.auth.user.isadmin){
                console.log("user");
                this.props.history.push('/');
            }
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
                        <TextFieldGroup
                            placeholder="Firstname "
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.onChange}
                            error={errors.firstname}
                        />
                        <TextFieldGroup
                            placeholder="Lastname "
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.onChange}
                            error={errors.lastname}
                        />
                        <TextFieldGroup
                            placeholder="Email Address" 
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            type="email"
                            error={errors.email}
                        />
                        <TextFieldGroup
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            error={errors.password}
                        />
                        <TextFieldGroup
                            name="cpassword"
                            value={this.state.cpassword}
                            onChange={this.onChange}
                            type="password"
                            error={errors.cpassword}
                        />
                        
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
