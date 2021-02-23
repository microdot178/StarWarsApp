import axios from 'axios'

export const fetchPlanets = async (page = 1) => {
    return axios.get('https://swapi.dev/api/planets/',{
        params: {
            page: page
        }
    })
}

export const fetchPlanet = async (id) => {
    return axios.get(`https://swapi.dev/api/planets/${id}`)
}


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
