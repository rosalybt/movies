import MovieCatalog from "../../SharedComponents/CardCatalog";
import useFetch from '../../../hooks/useFetch'



const SimilarMovies = (id) => {
    const { results: similarMovies } = useFetch(`${id}/similar?`, 'movie')
    return (
        <>
            { similarMovies && <MovieCatalog list={similarMovies} />}
        </>
    );
}

export default SimilarMovies