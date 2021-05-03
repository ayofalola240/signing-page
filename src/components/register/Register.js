import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import './Register.css'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [otherNames, setOtherNames] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [username, setUsername] = useState('')
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
                const { data } = await axios.post('https://medicaly-internship-api.herokuapp.com/signup',
                    { email, password, lastName, otherNames, address, username }, config)

                toast.success(`Welcome ${data.data.email} `);

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
                        <h1 className='form-title'>Register</h1>
                        <div className='names'>
                            <div className="name input-field">
                                <label htmlFor="lastname" >Lastname</label>
                                <input type='lastname' placeholder='Lastname' value={lastName}
                                    onChange={e => setLastName(e.target.value)} >
                                </input>
                            </div>
                            <div className="name input-field">
                                <label htmlFor="otherNames" >OtherNames</label>
                                <input type='otherNames' placeholder='OtherNames' value={otherNames}
                                    onChange={e => setOtherNames(e.target.value)} >
                                </input>
                            </div>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email" >Email</label>
                            <input type='email' placeholder='Email' value={email}
                                onChange={e => setEmail(e.target.value)} >
                            </input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="address" >Address</label>
                            <input type='address' placeholder='Address' value={address}
                                onChange={e => setAddress(e.target.value)} >
                            </input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="city" >City</label>
                            <input type='city' placeholder='City' value={city}
                                onChange={e => setCity(e.target.value)} >
                            </input>
                        </div>
                        <div className="input-field">
                            <label htmlFor="username" >Username</label>
                            <input type='username' placeholder='Username' value={username}
                                onChange={e => setUsername(e.target.value)} >
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
                                <span>Accept terms and condition</span>
                            </label>
                            <div className="forgot_password"><span>Already have an account? signin</span></div>
                        </div>
                        <button className='submit-button' type='submit'>Register</button>
                    </form>


                </div>
                <div className='column-image'>
                    <img src={process.env.PUBLIC_URL + 'image/register.svg'} className='image' alt='illustration' />
                </div>
            </div>
        </div>
    )
}

export default Signin
