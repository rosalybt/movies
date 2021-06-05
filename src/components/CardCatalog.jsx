import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

    return (
        <Container>
            {
                list.map(movie => {
                    return <Link to={`/movie/${movie.id}/info`}>
                        <MovieCard key={movie.id}
                            img={movie.poster_path}
                            title={movie.title}
                        />
                    </Link>
                })
            }
        </Container>
    )
}

export default CardCatalog