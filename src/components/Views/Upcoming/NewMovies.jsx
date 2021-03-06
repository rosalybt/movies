import styled from 'styled-components'
import MovieCatalog from '../../SharedComponents/CardCatalog'
import Pagination from '../../SharedComponents/Pagination'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { createUrl } from '../../../utils/Variables'


// STYLES
const Title = styled.h2`
font-weight: x-large;
font-size: x-large;
`
const ContainerTitle = styled.div`
text-align: center;
margin: ${({ theme }) => theme.margin.large} 0;
`

// COMPONENT
const NewMovies = () => {
    const { params } = useRouteMatch()
    const [{ results: movies, page, total_pages }, setMovies] = useState({})

    useEffect(() => {
        fetch(createUrl('upcoming?', 'movie', params.num))
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [params.num])


    return (
        <>
            <ContainerTitle>
                <Title>Últimos Lanzamientos</Title>
            </ContainerTitle>

            {movies && <MovieCatalog list={movies} />}

            <Pagination page={page} totalPages={total_pages} />
        </>
    )
}

export default NewMovies