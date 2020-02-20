import React, { Component } from 'react'

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

        const newUser = {
            ...this.state
        };
        console.log(newUser);
    }

    render() {
        return (
            <div className="login">
            <div className="row pt-5">
                <div className="col-md-8 m-auto">
                <h2 className="display-5 text-center">Hey, welcome back!</h2>
                <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="email" 
                                className="form-control form-control-lg" 
                                placeholder="Email Address" 
                                name="email"
                                required 
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className="form-control form-control-lg" 
                                placeholder="" 
                                name="password"
                                required 
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" value="Login" />
                </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Login;