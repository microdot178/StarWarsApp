import React from 'react'
import './styles.css'
import { fetchStarship, fetchStarShips } from '../../services/swapi'
import no_image from '../../assets/img/no_image.jpg'
import Overlay from '../common/overlay'
import Modal from '../common/modal'
import StarshipItem from '../starshipItem'

const StarShips = () => {

    const [starShips, setStarShips] = React.useState([]);
    const [itemId, setItemId] = React.useState(null)

    const handleFetchStarShips = () => {
        fetchStarShips().then((res) => setStarShips(res.data.results));
    };

    React.useEffect(() => {
        handleFetchStarShips();
    }, []);

    return (
        <>
            <div className='content'>
                {starShips.map((item) => {
                    const elementId = item.url.match(/[0-9]{1,2}/)[0]
                    return (
                        <div className='item' onClick={() => setItemId(elementId)}>
                            {/* <Modal /> */}
                            <img
                                onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                                src={`https://starwars-visualguide.com/assets/img/starships/${elementId}.jpg`} 
                                className='image'
                            />
                            <div className='starship_name'> {item.name} </div>
                        </div>
                    )
                })}

            </div>

            { !!itemId && 
                <Overlay setItemId={setItemId}>
                    <Modal>
                        <StarshipItem 
                            id={itemId} 
                            fetch={(id) => fetchStarship(id)} 
                            setItemId={setItemId} 
                        
                        />
                    </Modal>
                </Overlay> }
        </>
    )

}

export default StarShips;