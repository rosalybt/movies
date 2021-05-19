import styled from 'styled-components'
import MovieCatalog from './MovieCatalogo'
import Pagination from './Pagination'

// STYLES
const Title = styled.h2`
font-weight: 500;
`
const ContainerTitle = styled.div`
text-align: center;
padding: 30px;
margin-bottom: 30px
`

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