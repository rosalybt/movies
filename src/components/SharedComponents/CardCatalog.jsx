import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MovieCard from './Card'
import { convertToUppercase } from '../../utils/Variables'

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
                    return <Link to={`/movie/${movie.id}/info`} key={movie.id}>
                        <MovieCard
                            img={movie.poster_path}
                            title={convertToUppercase(movie.title)}
                        />
                    </Link>
                })
            }
        </Container>
    )
}

export default CardCatalog