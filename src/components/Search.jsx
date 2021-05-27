import MovieCatalog from './MovieCatalogo'
import Pagination from './Pagination'
import FormSearch from './FormSearch'


const Search = () => {
    return (
        <>
            <FormSearch />

            <MovieCatalog />

            <Pagination />
        </>


    );
}

export default Search