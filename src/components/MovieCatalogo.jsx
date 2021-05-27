import styled from 'styled-components'
import Card from './Card'

// STYLES
const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px;
`

// COMPONENT
const MovieCatalog = (props) => {

    return (
        <Container>
            {
                <Card />
                /* props.map(movie => < Card />) */

            }
        </Container>
    )
}

export default MovieCatalog