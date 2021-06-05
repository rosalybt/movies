import styled from 'styled-components'
import MovieCatalog from './CardCatalog'
import Pagination from './Pagination'

// STYLES
const Title = styled.h2`
font-weight: 500;
`
const ContainerTitle = styled.div`
text-align: center;
`
// COMPONENT
const NewMovies = () => {
    return (
        <>
            <ContainerTitle>
                <Title>Últimos Lanzamientos</Title>
            </ContainerTitle>

            <MovieCatalog />

            <Pagination />
        </>
    )
}

export default NewMovies