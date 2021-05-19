import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px
`


const MovieCatalog = (props) => {

    return (
        <Container>
            {
                /* props.map(movie => < Card />) */

            }
        </Container>
    )
}

export default MovieCatalog