import React, { useState, useEffect } from 'react'
import './Signin.css'

const Signin = () => {
    const [email, setEmail] = useState('email')
    const [password, setPassword] = useState('password')
    return (
        <div className='logContainer'>
            <div className='row'>

                <div className='column-form'>
                    <form id="form" className='sign-up-form' >
                        <h1 className='form-title'>Sign Up</h1>
                        <div className="input-field">
                            <label htmlFor="email" >Email/Username</label>
                            <input type='email' placeholder='Email' value={email}
                                onChange={e => setEmail(e.target.value)} >
                            </input>

                        </div>
                        <div className="input-field">
                            <label htmlFor="password" >Password</label>
                            <input type='password' placeholder='Confirm Password' value={password}
                                onChange={e => setPassword(e.target.value)} >
                            </input>
                        </div>
                        <div className="form__actions">
                            <label for="checkboxInput" className="remeber_me">
                                <input type="checkbox" id="checkboxInput"></input>
                                <span className="checkmark"></span>
                                <span>Remeber Me</span>
                            </label>
                            <div className="forgot_password">Forgot Password?</div>
                        </div>
                        <button className='submit-button' type='submit'>Login</button>
                    </form>


                </div>
                <div className='column-image'>
                    <img src={process.env.PUBLIC_URL + 'image/login.svg'} className='image' />
                </div>
            </div>
        </div>
    )
}

export default Signin
