import axios from 'axios'

export const fetchPlanets = async () => {
    return axios.get('https://swapi.dev/api/planets/',{
        params: {
            page: 2
        }
    })
}

export const fetchPlanet = async (id) => {
    return axios.get(`https://swapi.dev/api/planets/${id}`)
}


export const fetchStarShips = async () => {
    return axios.get(`https://swapi.dev/api/starships/`,{
        params: {
            page: 1
        }
    })
}

export const fetchStarship = async (id) => {
    return axios.get(`https://swapi.dev/api/starships/${id}`)
}
