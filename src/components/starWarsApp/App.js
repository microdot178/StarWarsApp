import React from 'react'
import './styles.css'
import Header from '../header'
import Footer from '../footer'
import Planets from '../planets'
import StarShips from '../starShips'
import People from '../people'
 
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
                style = {{ border: tab === 0 ? "1px solid blue" : "" }}
                >
                    planets
                </button>
                <button
                className="tablinks"
                onClick={() => setTab(1)}
                style = {{ border: tab === 1 ? "1px solid blue" : "" }}
                >
                    people
                </button>
                <button
                className="tablinks"
                onClick={() => setTab(2)}
                style = {{ border: tab === 2 ? "1px solid blue" : "" }}
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