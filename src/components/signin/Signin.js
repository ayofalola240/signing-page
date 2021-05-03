import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './Signin.css'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        const login = async () => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const { data } = await axios.post('https://medicaly-internship-api.herokuapp.com/login', { email, password }, config)

                toast.success(`Welcome back ${data.data.email}`);

            } catch (err) {
                console.log(err)
                toast.error('Error! try again.');

            }

        }
        login()
    }
    return (
        <div className='logContainer'>
            <div className='row'>
                <div className='column-form'>
                    <form id="form" className='sign-up-form' onSubmit={submitHandler}>
                        <h1 className='form-title'>Sign Up</h1>
                        <div className="input-field">
                            <label htmlFor="email" >Email/Username</label>
                            <input type='email' placeholder='Email' value={email}
                                onChange={e => setEmail(e.target.value)} >
                            </input>

                        </div>
                        <div className="input-field">
                            <label htmlFor="password" >Password</label>
                            <input type='password' placeholder='Password' value={password}
                                onChange={e => setPassword(e.target.value)} >
                            </input>
                        </div>
                        <div className="form__actions">
                            <label htmlFor="checkboxInput" className="remeber_me">
                                <input type="checkbox" id="checkboxInput"></input>
                                <span className="checkmark"></span>
                                <span>Remeber Me</span>
                            </label>
                            <div className="forgot_password"><span>Forgot Password?</span></div>
                        </div>
                        <button className='submit-button' type='submit'>Login</button>
                    </form>


                </div>
                <div className='column-image'>
                    <img src={process.env.PUBLIC_URL + 'image/login.svg'} className='image' alt='illustration' />
                </div>
            </div>
        </div>
    )
}

export default Signin
