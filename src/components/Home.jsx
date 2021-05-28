import styled from 'styled-components'
import MovieList from './MovieList'
import Carousel from './Caurosel'
import UseFetch from './../hooks/useFetch'
import {
    URL_POPULAR_MOVIES,
    URL_TOP_RATING_MOVIES,
    URL_NOW_PLAYING,
    createUrl
} from '../utils/Variables'

const ContainerMovieList = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
padding: 20px 0 
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: ${props => props.theme.colors.tertiary};
`


const Home = () => {
    const popularMovies = UseFetch('popular')
    const topRated = UseFetch('top_rated')
    const nowPlaying = UseFetch('upcoming')

    return (
        <Container>
            <Carousel movieList={nowPlaying}></Carousel>

            <ContainerMovieList>
                <MovieList movies={popularMovies} listName='Peliculas Populares' />
                <MovieList movies={topRated} listName='Peliculas Mejor Puntuadas' />
            </ContainerMovieList>
        </Container>
    )
}

export default Home