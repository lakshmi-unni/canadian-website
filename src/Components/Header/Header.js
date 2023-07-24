import React from 'react'
import '../Header/Header.css'
import LogoImg from '../../Assets/logo.png'
import './Header.css'
import Emailogo from '../../Assets/email.svg'
import PhLogo from '../../Assets/phone.svg'


const Header = () => {
    return (
        <header>
            <nav>
                <div className='logo'>
                    <a href='.'>
                        <img src={LogoImg} alt='logo'>

                        </img>
                    </a>
                </div>

                <div className='navbar'>
                    <ul>

                        <li>
                            <img style={{ marginRight: "8px" }} src={PhLogo} alt='ph' />
                            <a href="#">+1 (905) 206-1444</a>
                        </li>


                        <li>
                            <img style={{ marginRight: "8px" }} src={Emailogo} alt='ph' />

                            <a href="#">info@thecanadianhome.com</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header