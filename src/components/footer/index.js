import React from 'react'
import './styles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <a  
                href="https://github.com/microdot178" 
                className='github'>
                <i class="fab fa-github" aria-hidden="true"></i>GitHub
            </a>
            <a
                href='https://swapi.dev/'
                className='swapi'>
                swapi.dev
            </a>
        </div>
    )
}

export default Footer;