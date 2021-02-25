import React from 'react'
import './styles.css'
import no_image from '../../assets/img/no_image.jpg'
import Loader from '../common/loader'

const CharacterItem = ({ id = 1, fetch, setItemId }) => {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch(id)
            .then(res => {
                setData(res.data)
            })
    }, [])

    return !data ? <Loader /> : (
        <div>
            <span className='close' onClick={() => setItemId(null)}><i class="fas fa-times"></i></span>
            <div className='item_modal'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/people/${id}.jpg`}
                    onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                    className='image_modal' 
                />
                <div className='about'>
                    <span><strong>name:</strong> {data.name} </span>
                    <span><strong>height:</strong> {data.height} </span>
                    <span><strong>mass:</strong> {data.mass} </span>
                    <span><strong>hair color:</strong> {data.hair_color} </span>
                    <span><strong>skin color:</strong> {data.skin_color} </span>
                    <span><strong>eye color:</strong> {data.eye_color} </span>
                    <span><strong>birth year:</strong> {data.birth_year} </span>
                    <span><strong>gender:</strong> {data.gender} </span>
                    {/* <span><strong>homeworld:</strong> {data.homeworld} </span>
                    <span><strong>films:</strong> {data.films} </span> */}
                </div>
            </div>
        </div>
    )
}

export default CharacterItem;