import styled from 'styled-components'
import MovieList from './MovieList'
import Carousel from './Caurosel'
import UseFetch from '../../../hooks/useFetch'
import { Flex } from '../../Commons'


const ContainerMovieList = styled(Flex)`
padding: ${props => props.theme.padding.large} 
`

const Container = styled(Flex)`
background-color: ${props => props.theme.colors.tertiary};
`


const Home = () => {
    const { results: popularMovies } = UseFetch('popular?', 'movie')
    const { results: topRated } = UseFetch('top_rated?', 'movie')
    const { results: nowPlaying } = UseFetch('upcoming?', 'movie')

    return (
        <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="normal"
        >
            { nowPlaying && <Carousel movieList={nowPlaying}></Carousel>}

            <ContainerMovieList
                flexDirection
                justifyContent="space-evenly"
            >
                {popularMovies && <MovieList movies={popularMovies} listName='Peliculas Populares' />}
                {topRated && <MovieList movies={topRated} listName='Peliculas Mejor Puntuadas' />}
            </ContainerMovieList>
        </Container>
    )
}

export default Home