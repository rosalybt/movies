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
const NewMovies = () => {
    const movies = UseFetch('upcoming', 'movie')
    return (
        <>
            <ContainerTitle>
                <Title>Últimos Lanzamientos</Title>
            </ContainerTitle>

            <MovieCatalog list={movies} />

            <Pagination />
        </>
    )
}

export default NewMovies