import React from 'react'
import './styles.css'
import { fetchStarship, fetchStarShips } from '../../services/swapi'
import no_image from '../../assets/img/no_image.jpg'
import Overlay from '../common/overlay'
import Modal from '../common/modal'
import StarshipItem from '../starshipItem'
import { Pagination } from '@material-ui/lab'

const StarShips = () => {

    const [starShips, setStarShips] = React.useState([]);
    const [itemId, setItemId] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(0)

    const handleFetchStarShips = (page) => {
        fetchStarShips(page).then((res) => {
            setCount(res.data.count)
            setStarShips(res.data.results)
        });
    };

    React.useEffect(() => {
        handleFetchStarShips();
    }, []);

    React.useEffect(() => {
        handleFetchStarShips(page);
    }, [page]);

    return (
        <>
            <div className='starships'>
                {starShips.map((item) => {
                    const elementId = item.url.match(/[0-9]{1,2}/)[0]
                    return (
                        <div className='item' onClick={() => setItemId(elementId)}>
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
            <div className='nav'>
                <Pagination 
                    count={4}
                    page={page}
                    onChange={(e, value) => {setPage(value)}}
                    className='pagination'
                />
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