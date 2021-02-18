import React from 'react'
import './styles.css'

const Overlay = ({children, setItemId}) => {

React.useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
        document.body.style.overflow = 'auto' 
    }
}, [])

    return (
        <div className='overlay' onClick={() => setItemId(null)}>{children}</div>
    )
}

export default Overlay