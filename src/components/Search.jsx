import styled from 'styled-components'
import MoreInfo from './MoreInfoMovie'
import MovieCatalog from './MovieCatalogo'
import Pagination from './Pagination'
import SearchBar from './SearchBar'

// STYLES
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 30px;
`

const ContainerSearchBar = styled(Container)`
flex-direction: row;
padding: 0;
margin-bottom:20px;
`

const Search = () => {
    return (
        // <Container>
        //     <ContainerSearchBar>
        //         <SearchBar />
        //     </ContainerSearchBar>

        //     <MovieCatalog />
        //     <Pagination />
        // </Container>
        <Container>
            <MoreInfo />
        </Container>

    )
}

export default Search