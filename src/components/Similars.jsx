import MovieCatalog from "./CardCatalog"
import useFetch from '../hooks/useFetch'



const SimilarMovies = (id) => {
    debugger
    const similarMovies = useFetch(`${id}/similar`)
    console.log(similarMovies)
    return (

        <MovieCatalog list={similarMovies} />
    )
}

export default SimilarMovies