import React, { Component } from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom'

export default class Singup extends Component {

    state = {
        users: []
    }

    
        createuser = async event => {
            event.preventDefault();

            let us = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            phone: event.target.phonenumber.value,
            email: event.target.emailaddress.value,
            pasw: event.target.password.value
            }

            event.target.reset();

            this.state.users = await [...this.state.users ,us];
            console.log(this.state.users)
    }

    render() {
        return (
            <form className='container mt-5 w-30' onSubmit={this.createuser}>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="firstname">First name</label>
                                <input type="text" id="firstname" className="form-control border-secondary-subtle" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" htmlFor="lastname">Last name</label>
                                <input type="text" id="lastname" className="form-control border-secondary-subtle" />
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="phonenumber">Phone number</label>
                        <input type="text" id="phonenumber" className="form-control border-secondary-subtle" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="emailaddress">Email address</label>
                        <input type="email" id="emailaddress" className="form-control border-secondary-subtle" />
                    </div>


                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control border-secondary-subtle" />
                    </div>
        
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-outline-success btn-block mb-4">
                            <a href='/login' className='text-decoration-none text-color-none text-reset'>Sing up</a>
                            </button>
                        <button type="reset" className="btn btn-outline-danger btn-block mb-4 ms-4">Cancel</button>
                    </div>


                    <div className="text-center mb-4">
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
