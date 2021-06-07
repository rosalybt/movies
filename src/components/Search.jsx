import MovieCatalog from './CardCatalog'
import Pagination from './Pagination'
import FormSearch from './FormSearch'
import UseFetch from '../hooks/useFetch'

const Search = () => {
    const { results: topRated } = UseFetch('top_rated', 'movie')
    return (
        <>
            <FormSearch />

            {topRated && <MovieCatalog list={topRated} />}

            <Pagination />
        </>


    );
}

export default Search