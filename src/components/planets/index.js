import React from 'react'
import './styles.css'
import { fetchPlanet, fetchPlanets } from "../../services/swapi"
import no_image from '../../assets/img/no_image.jpg'
import Overlay from '../common/overlay'
import Modal from '../common/modal'
import ListItem from '../listItem/PlanetItem'

const Planets = () => {

    const [planets, setPlanets] = React.useState([]);
    const [itemId, setItemId] = React.useState(null)


    const handleFetchPlanets = () => {
        fetchPlanets().then((res) => setPlanets(res.data.results));
    };

    React.useEffect(() => {
        handleFetchPlanets();
    }, []);

    return (
        <>
            <div className='content'>
                {planets.map((item) => {
                    const elementId = item.url.match(/[0-9]{1,2}/)[0]
                    return (
                        <div className='item' onClick={() => setItemId(elementId)}>
                            {/* <Modal /> */}
                            <img
                                onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                                src={`https://starwars-visualguide.com/assets/img/planets/${elementId}.jpg`} 
                                className='image'
                            />
                            <div className='planet_name'> {item.name} </div>
                        </div>
                    )
                })}
            </div>
            
            { !!itemId && 
                <Overlay setItemId={setItemId}>
                    <Modal>
                        <ListItem 
                            id={itemId} 
                            fetch={(id) => fetchPlanet(id)} 
                            setItemId={setItemId} 
                        />
                    </Modal>
                </Overlay> }
        </>
    )
}

export default Planets;