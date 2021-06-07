import MovieCatalog from './CardCatalog'
import Pagination from './Pagination'
import FormSearch from './FormSearch'
// import UseFetch from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { createUrl } from '../utils/Variables'

const Search = () => {
    const { params } = useRouteMatch()
    const [{ results: topRated, page, total_pages }, setMovies] = useState({})

    useEffect(() => {
        fetch(createUrl('movie?query=hulk&', 'search', params.num))
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.num])

    // const { results: topRated } = UseFetch('top_rated', 'movie')
    return (
        <>
            <FormSearch />

            {topRated && <MovieCatalog list={topRated} />}

            <Pagination page={page} totalPages={total_pages} />
        </>


    );
}

export default Search