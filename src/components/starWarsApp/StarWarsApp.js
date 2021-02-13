import React from 'react'
import './styles.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Planets from '../planets/Planets'
import StarShips from '../starShips/StarShips'
import People from '../people/People'

const StarWarsApp = () => {

    const [tab, setTab] = React.useState(0);

    const renderTabs = (id) => {
        switch (id) {
            case 0:
                return (
                    <div className='content'>
                        <Planets />
                    </div>
                );
            case 1:
                return (
                    <div className='content'>
                        <People />
                    </div>
                );
            case 2:
                return (
                    <div className='content'>
                        <StarShips />
                    </div>
                );
            default:
                break;
        }
    };

    return (
        <div>
            <Header />
            <div className="tab">
                <button
                className="tablinks"
                onClick={() => setTab(0)}
                >
                    planets
                </button>
                <button
                className="tablinks"
                onClick={() => setTab(1)}
                >
                    people
                </button>
                <button
                className="tablinks"
                onClick={() => setTab(2)}
                >
                    starships
                </button>
            </div>
    
            {renderTabs(tab)}
            <Footer />
        </div>
    );
}

export default StarWarsApp;