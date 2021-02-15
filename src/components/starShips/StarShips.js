import React from 'react'
import './styles.css'
import { fetchStarShips } from '../../services/swapi'
import no_image from '../../img/no_image.jpg'

const StarShips = () => {

    const[starShips, setStarShips] = React.useState([]);

    const handleFetchStarShips = () => {
        fetchStarShips().then((res) => setStarShips(res.data.results));
    };

    React.useEffect(() => {
        handleFetchStarShips();
    }, []);

    return (
        <div className='content'>
            {starShips.map((item, id) => {
                return (
                    <div className='item'> 
                        <img 
                            onError={(e)=>{e.target.onerror = null; e.target.src=no_image}} 
                            src={`https://starwars-visualguide.com/assets/img/starships/${id+1}.jpg`} className='image' 
                        />
                        <div className='planet_name'> {item.name} </div>
                    </div>
                )
            })}

        </div>
    )

}

export default StarShips;