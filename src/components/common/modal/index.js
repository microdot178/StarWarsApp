import React from 'react'
import './styles.css'

const Modal = ({ children }) => {
    return (
        <div className='modal'>
                {children}
        </div>
    )
}

export default Modal