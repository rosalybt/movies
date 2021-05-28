const URL_BASE = "https://api.themoviedb.org/3/movie/"
const API_KEY = "a3c153949fde18432538e84197afdd2c"
const QUERY_PARAMS = "&language=es-ES&page=1"

export const URL_POPULAR_MOVIES = ` ${URL_BASE}popular?api_key=${API_KEY}${QUERY_PARAMS}`
export const URL_TOP_RATING_MOVIES = `${URL_BASE}top_rated?api_key=${API_KEY}${QUERY_PARAMS}`
export const URL_NOW_PLAYING = `${URL_BASE}upcoming?api_key=${API_KEY}${QUERY_PARAMS}`

export const convertirAMayusculas = string => {
    return string.toUpperCase()
}

export const cortarArray = (array) => {
    return array.slice(0, 5)
}
