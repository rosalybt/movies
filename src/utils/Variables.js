
const URL_BASE = "https://api.themoviedb.org/3/movie/"
const API_KEY = "?api_key=a3c153949fde18432538e84197afdd2c"
const QUERY_PARAMS = "&language=es-ES&page=1"
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original/'

export const convertirAMayusculas = string => {
    return string.toUpperCase()
}

export const cortarArray = (array) => {
    return array.slice(0, 5)
}

export const createUrl = (param) => `${URL_BASE}${param}${API_KEY}${QUERY_PARAMS}`

