import axios from 'axios'

//вкладка planets
// итемы, которые будур рисоваться в вкладке
export const fetchPlanets = async (page = 1) => {
    return axios.get('https://swapi.dev/api/planets/',{
        params: {
            page: page
        }
    })
}

// итем, который будет рисоваться в модальном окне
export const fetchPlanet = async (id) => {
    return axios.get(`https://swapi.dev/api/planets/${id}`)
}

//вкладка characters
export const fetchCharacters = async (page = 1) => {
    return axios.get('https://swapi.dev/api/people/',{
        params: {
            page: page
        }
    })
}

export const fetchCharacter = async (id) => {
    return axios.get(`https://swapi.dev/api/people/${id}/`)
}

//вкладка starships
export const fetchStarShips = async (page = 1) => {
    return axios.get(`https://swapi.dev/api/starships/`,{
        params: {
            page: page
        }
    })
}

export const fetchStarship = async (id) => {
    return axios.get(`https://swapi.dev/api/starships/${id}`)
}


