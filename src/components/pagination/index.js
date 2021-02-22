import React from 'react'
import './styles.css'

let pageNumber = 1

const Pagination = ({handleFetchItems}) => {

    const changePage = (value) => {
        pageNumber += value
        console.log(pageNumber)
        return(
            handleFetchItems(pageNumber)
        )
    }

    return (
        <div className='block'> 
            <button onClick={() => changePage(-1)} className='button'>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            <div className='pageNumber'>
                {pageNumber}
            </div>

            <button 
                onClick={() => changePage(+1)} className='button'>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Pagination;