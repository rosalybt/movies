import MovieCatalog from "../../SharedComponents/CardCatalog";
import useFetch from '../../../hooks/useFetch'



const SimilarMovies = (id) => {
    debugger
    const similarMovies = useFetch(`${id}/similar`, 'movie')
    console.log(similarMovies)
    return (

        <MovieCatalog list={similarMovies} />
    )
}

export default SimilarMovies