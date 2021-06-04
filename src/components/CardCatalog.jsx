import styled from 'styled-components'
import MovieCard from './Card'

// STYLES
const Container = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 20px;
`

// COMPONENT
const CardCatalog = ({ list }) => {
    debugger
    return (
        <Container>
            {
                list.map(movie => {
                    return <MovieCard
                        img={movie.poster_path}
                        title={movie.title}
                    />
                })
            }
        </Container>
    )
}

export default CardCatalog