import React, { Component } from 'react'

export default class Login extends Component {
    render() {

        return (
            <form className='container mt-5 w-30'>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" className="form-control border-secondary-subtle" />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control border-secondary-subtle" />
                    </div>


                    <div className="row mb-4">
                        <div className="col text-center">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-outline-success btn-block mb-4">Sign up</button>
                    </div>


                    <div className="text-center mb-4">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign in with:</p>
                        <button type="button" className="btn btn-outline-primary btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-outline-danger btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-outline-primary btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-outline-dark btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>
                </form>
        )
    }
}
