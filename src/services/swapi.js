import axios from 'axios'

export const fetchPlanets = async () => {
    return axios.get('https://swapi.dev/api/planets/')
}

export const fetchStarShips = async () => {
    return axios.get('https://swapi.dev/api/starships/')
}