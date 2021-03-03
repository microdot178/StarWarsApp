import React from 'react'
import './styles.css'
import logo from '../../assets/img/logo.png'
import jedi from '../../assets/img/jedi.jpg'

const Header = () => {
    return (
        <div className='header'>
            <a 
                href="http://localhost:6308/planets" >
                <img src={logo} className='logo' />
            </a>
            <img src={jedi} className='jedi' />
        </div>
    )
}

export default Header;