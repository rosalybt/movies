import styled from 'styled-components'
import CastCard from '../InfoMovieDetail/CastCard'
import useFetch from '../../../hooks/useFetch'
import { Link, useParams } from 'react-router-dom'

const Container = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content:center;
align-items: flex-start;
background-color: ${({ theme }) => theme.colors.tertiary};
padding: 20px 0
`

const Credits = () => {
    let { id } = useParams()
    let movies = useFetch(`${id}/movie_credits?`, 'person')

    return (
        <Container>

            {movies.cast && movies.cast.map((movie) => {
                return <Link key={movie.id} to={`/movie/${movie.id}/info`}>
                    <CastCard
                        key={movie.id}
                        img={movie.poster_path}
                        originalName={movie.original_title}
                        character={movie.character}
                    />
                </Link >
            })}

        </Container >
    )
}

export default Credits