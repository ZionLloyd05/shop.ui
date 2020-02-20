import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames';

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

        axios.post('/api/v1.0/auth/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({errors: err.response.data}));
    }

    render() {

        let { errors } = this.state;

        if(errors.data){
            errors = errors.data;
        }

        return (
            <div className="register">
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

export default Register;