import React from 'react'
import './styles.css'
import no_image from '../../assets/img/no_image.jpg'

const ListItem = ({ id = 1, fetch, setItemId }) => {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch(id)
            .then(res => {
                setData(res.data)
            })
    }, [])

    return !data ? <h2>LOADING...</h2> : (
        <div>
            <span className='close' onClick={() => setItemId(null)}><i class="fas fa-times"></i></span>
            <div className='item_modal'>
                <img 
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                    className='image_modal' 
                />
                { console.log(data) }
                <div className='about'>
                    <span><strong>name:</strong> {data.name} </span>
                    <span><strong>climate:</strong> {data.climate}</span>
                    <span><strong>diameter:</strong> {data.diameter}</span>
                    <span><strong>gravity:</strong> {data.gravity}</span>
                    <span><strong>terrain:</strong> {data.terrain}</span>
                    <span><strong>surface_water:</strong> {data.surface_water}</span>
                    <span><strong>population:</strong> {data.population}</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem;