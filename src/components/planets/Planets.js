import React from 'react'
import './styles.css'
import { fetchPlanets } from "../../services/swapi";

const Planets = () => {

    const[planets, setPlanets] = React.useState([]);

    const handleFetchPlanets = () => {
        fetchPlanets().then((res) => setPlanets(res.data.results));
    };
        
    React.useEffect(() => {
        handleFetchPlanets();
    }, []);
    
    console.log(planets)

    return (
        <div className='content'>
            {planets.map((item, id) => {
                return (
                    <div className='item'> 
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id+1}.jpg`} className='image' />
                        <div className='planet_name'> {item.name} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Planets;