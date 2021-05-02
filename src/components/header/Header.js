import React from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'
const Header = ({ history }) => {
    return (
        <nav className='nav'>
            <div className='nav-items'>
                <span className='item' onClick={() => { history.push('/login') }}>
                    signin
            </span>
                <span className='item' onClick={() => { history.push('/register') }}>
                    register
            </span>

            </div>
        </nav>
    )
}

export default withRouter(Header)

