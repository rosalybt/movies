import styled from 'styled-components'
import MovieCard from './Card'

// STYLES
const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px;
`

// COMPONENT
const CardCatalog = ({ movieList }) => {

    return (
        <Container>
            {
                movieList.map(item => {
                    return <MovieCard
                        img={item.img}
                        title={item.title}
                    />
                })
            }
        </Container>
    )
}

export default CardCatalog