import React from 'react';
import '../planets/styles.css'
import { fetchCharacters, fetchCharacter } from '../../services/swapi'
import no_image from '../../assets/img/no_image.jpg'
import Overlay from '../common/overlay'
import Modal from '../common/modal'
import CharacterItem from '../itemList/Characters.js'
import { Pagination } from '@material-ui/lab'

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    pagination: {
        '& .MuiPaginationItem-page' : {
            color: 'white',
            padding: '20px',
            marginTop: '20px',
        },
        '& .MuiPaginationItem-page.Mui-selected' : {
            color: 'blue',
        } 
    },
}));

// вкладка characters

const Characters = () => {

    const classes = useStyles()

    const [characters, setCharacters] = React.useState([])
    const [itemId, setItemId] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(0)

    const handleFetchCaracters = (page) => {
        fetchCharacters(page).then((res) => {
            setCount(res.data.count)
            setCharacters(res.data.results)
        });
    };

    React.useEffect(() => {
        handleFetchCaracters();
    }, []);

    React.useEffect(() => {
        handleFetchCaracters(page);
    }, [page]);

    return (
        <>
            <div className='items'>
                {/* рисую циклом все объекты, полученые в json */}
                {characters.map((item) => {
                    const elementId = item.url.match(/[0-9]{1,2}/)[0]
                    return (
                        <div className='item' onClick={() => setItemId(elementId)}>
                            <img
                                onError={(e) => { e.target.onerror = null; e.target.src = no_image }}
                                src={`https://starwars-visualguide.com/assets/img/people/${elementId}.jpg`} 
                                className='image'
                            />
                            <div className='item_name'> {item.name} </div>
                        </div>
                    )
                })}
            </div>
            <div className='nav'>
                <Pagination 
                    count={9} 
                    page={page} 
                    onChange={(e, value) => {setPage(value)}}
                    shape="rounded"
                    className={classes.pagination}
                />
            </div>
            { !!itemId && 
                <Overlay setItemId={setItemId}>
                    <Modal>
                        <CharacterItem 
                            id={itemId} 
                            fetch={(id) => fetchCharacter(id)} 
                            setItemId={setItemId} 
                        />
                    </Modal>
                </Overlay> }
        </>
    )
}

export default Characters;