import React from 'react'
import './styles.css'
import { fetchPlanets } from "../../services/swapi";
import no_image from '../../img/no_image.jpg'

const getImage = (id) => {
    let url = `https://starwars-visualguide.com/assets/img/planets/${id+1}.jpg`
    return (
        url
    )
}

const Planets = () => {

    const[planets, setPlanets] = React.useState([]);

    const handleFetchPlanets = () => {
        fetchPlanets().then((res) => setPlanets(res.data.results));
    };
        
    React.useEffect(() => {
        handleFetchPlanets();
    }, []);
    
    return (
        <div className='content'>
            {planets.map((item, id) => {
                return (
                    <div className='item'> 
                        <img 
                        onError={(e)=>{e.target.onerror = null; e.target.src=no_image}} 
                        src={getImage(id)} className='image' 
                        />
                        <div className='planet_name'> {item.name} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Planets;