import React from 'react'
import './styles.css'
import Header from '../header'
import Footer from '../footer'
import Planets from '../planets'
import StarShips from '../starShips'
import Characters from '../characters'
 
const StarWarsApp = () => {

    const [tab, setTab] = React.useState(0);
    
    //вкладки planets, characters, starships
    //конструкция switch

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
                        <Characters />
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
                    style = {{ color: tab === 0 ? "blue" : "" }}
                >
                    planets
                </button>
                <button
                    className="tablinks"
                    onClick={() => setTab(1)}
                    style = {{ color: tab === 1 ? "blue" : "" }}
                >
                    characters
                </button>
                <button
                    className="tablinks"
                    onClick={() => setTab(2)}
                    style = {{ color: tab === 2 ? "blue" : "" }}
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