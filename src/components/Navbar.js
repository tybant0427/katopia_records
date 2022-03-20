import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Katopia
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li> 
                <li className='nav-item'>
                    <Link to='/bookings' className='nav-links' onClick={closeMobileMenu}>
                        Booking
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                        Team
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
        </>
    );
}

export default Navbar;