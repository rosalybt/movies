import styled from 'styled-components'
import MovieCatalog from './CardCatalog'
import Pagination from './Pagination'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { createUrl } from '../utils/Variables'

// STYLES
const Title = styled.h2`
font-weight: 500;
`
const ContainerTitle = styled.div`
text-align: center;
margin: 30px 0;
`

// COMPONENT
const Popular = () => {
    const { params } = useRouteMatch()
    const [{ results: popularMovies, page, total_pages }, setMovies] = useState({})

    useEffect(() => {
        fetch(createUrl('popular', 'movie', params.num))
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.num])
    // const { results: popularMovies } = UseFetch('popular', 'movie')
    return (
        <>
            <ContainerTitle>
                <Title>Populares</Title>
            </ContainerTitle>

            {popularMovies && <MovieCatalog list={popularMovies} />}

            <Pagination page={page} totalPages={total_pages} />
        </>
    )
}

export default Popular