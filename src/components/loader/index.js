import React from 'react'
import './styles.css'
import loader from '../../assets/img/loader.png'

const Loader = () => {
    return (
        <div className='loader'>
            <img className="rot" src={loader}></img>
        </div>
    )
}

export default Loader;