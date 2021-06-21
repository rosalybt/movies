import MovieCatalog from '../../SharedComponents/CardCatalog';
import Pagination from '../../SharedComponents/Pagination'
import FormSearch from './FormSearch'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { createUrl } from '../../../utils/Variables'

const Search = () => {
    const { params } = useRouteMatch()
    const [{ results: topRated, page, total_pages }, setMovies] = useState({})
    // ojo con la mayuscula, deberia ser setSearch
    const [search, SetSearch] = useState()

    useEffect(() => {
        fetch(createUrl(search ? `movie?query=${search}&` : 'top_rated?', search ? 'search' : 'movie', params.num))
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.num, search])


    const handleSubmit = (value) => {
        SetSearch(value)
    }

    return (
        <>
            <FormSearch handleInput={handleSubmit} />

            {topRated && <MovieCatalog list={topRated} />}

            <Pagination page={page} totalPages={total_pages} />
        </>


    );
}

export default Search
