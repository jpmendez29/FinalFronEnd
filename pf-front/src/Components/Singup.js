import React, { Component } from 'react'
import { useState } from "react";
import { useNavigate} from 'react-router-dom'

const Singup = ({ users, setUsers }) => {
    const Navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async (event) => {
        
        event.preventDefault();
        

        const newUser = {
            firstname: firstName,
            lastname: lastName,
            phone: phoneNumber,
            email: email,
            pasw: password
        };

        await setUsers([...users, newUser]);

        // Restablecer los campos del formulario
        resetall();

        Navigate("/")
    };

    const resetall = async () => {
        // Restablecer los campos del formulario
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
    };

        return (
            <form className='container mt-5 w-30' onSubmit={createUser} onReset={resetall}>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="firstname">First name</label>
                            <input type="text" id="firstname" className="form-control border-secondary-subtle" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="lastname">Last name</label>
                            <input type="text" id="lastname" className="form-control border-secondary-subtle" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="phonenumber">Phone number</label>
                    <input type="text" id="phonenumber" className="form-control border-secondary-subtle" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="emailaddress">Email address</label>
                    <input type="email" id="emailaddress" className="form-control border-secondary-subtle" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>


                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control border-secondary-subtle" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-outline-success btn-block mb-4">Sing up</button>
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

export default Singup;
