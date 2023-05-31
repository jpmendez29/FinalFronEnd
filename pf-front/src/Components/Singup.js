import React, { Component } from 'react'

export default class Singup extends Component {
    render() {
        return (
            <form className='container mt-5 w-30'>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example1">First name</label>
                                <input type="text" id="form3Example1" className="form-control border-secondary-subtle" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="form3Example2">Last name</label>
                                <input type="text" id="form3Example2" className="form-control border-secondary-subtle" />
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form5Example5">Phone number</label>
                        <input type="text" id="form5Example5" className="form-control border-secondary-subtle" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                        <input type="email" id="form3Example3" className="form-control border-secondary-subtle" />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                        <input type="password" id="form3Example4" className="form-control border-secondary-subtle" />
                    </div>
        
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-outline-success btn-block mb-4">Sign up</button>
                        <button type="reset" className="btn btn-outline-danger btn-block mb-4 ms-4">Cancel</button>
                    </div>


                    <div className="text-center mb-4">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
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
