
const URL_BASE = "https://api.themoviedb.org/3/"
const API_KEY = "?api_key=a3c153949fde18432538e84197afdd2c"
const QUERY_PARAMS = "&language=es-ES&page="
export const BASE_URL_IMG_ORIGINAL = 'https://image.tmdb.org/t/p/original'
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'
export const BASE_URL_IMG_MEDIUM = 'https://image.tmdb.org/t/p/w300';
export const NOT_AVAILABLE = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'

export const convertirAMayusculas = string => {
    return string.toUpperCase()
}

export const cortarArray = (array) => {
    return array.slice(0, 5)
}

export const createUrl = (param, resource, page = 1) => `${URL_BASE + resource}/${param + API_KEY + QUERY_PARAMS + page}`

export const getRootURL = (string) => string.replace(/[0-9]/g, '')
