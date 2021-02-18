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
                    src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                    onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                    className='image_modal' 
                />
                { console.log(data) }
                <div className='about'>
                    <span><strong>name:</strong> {data.name} </span>
                    <span><strong>model:</strong> {data.model}</span>
                    <span><strong>manufacturer:</strong> {data.manufacturer}</span>
                    <span><strong>cost_in_credits:</strong> {data.cost_in_credits}</span>
                    <span><strong>length:</strong> {data.length}</span>
                    <span><strong>max_atmosphering_speed:</strong> {data.max_atmosphering_speed}</span>
                    <span><strong>crew:</strong> {data.crew}</span>
                    <span><strong>passengers:</strong> {data.passengers}</span>
                    <span><strong>starship_class:</strong> {data.starship_class}</span>
                </div>
            </div>
        </div>
    )
}

export default ListItem;