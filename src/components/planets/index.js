import React from 'react'
import './styles.css'
import { fetchPlanet, fetchPlanets } from "../../services/swapi"
import no_image from '../../assets/img/no_image.jpg'
import Overlay from '../common/overlay'
import Modal from '../common/modal'
import PlanetItem from '../planetItem'
import { Pagination } from '@material-ui/lab'

const Planets = () => {

    const [planets, setPlanets] = React.useState([])
    const [itemId, setItemId] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(0)


    const handleFetchPlanets = (page) => {
        fetchPlanets(page).then((res) => {
            setCount(res.data.count)
            setPlanets(res.data.results)
        });
    };

    React.useEffect(() => {
        handleFetchPlanets();
    }, []);

     React.useEffect(() => {
         handleFetchPlanets(page);
         console.log(page)
    }, [page]);

    return (
        <>
            <div className='planets'>
                {planets.map((item) => {
                    const elementId = item.url.match(/[0-9]{1,2}/)[0]
                    return (
                        <div className='item' onClick={() => setItemId(elementId)}>
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
            <div className='nav'>
                <Pagination 
                    count={count / 10} 
                    page={page} 
                    onChange={(e, value) => {setPage(value)}}
                    className='pagination'
                />
            </div>
            { !!itemId && 
                <Overlay setItemId={setItemId}>
                    <Modal>
                        <PlanetItem 
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