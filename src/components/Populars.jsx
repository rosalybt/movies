import styled from 'styled-components'
import MovieCatalog from './CardCatalog'
import Pagination from './Pagination'
import UseFetch from './../hooks/useFetch'

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
    const { results: popularMovies } = UseFetch('popular', 'movie')
    return (
        <>
            <ContainerTitle>
                <Title>Populares</Title>
            </ContainerTitle>

            {popularMovies && <MovieCatalog list={popularMovies} />}

            <Pagination />
        </>
    )
}

export default Popular