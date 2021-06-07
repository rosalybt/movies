import styled from 'styled-components'
import MovieList from './MovieList'
import Carousel from './Caurosel'
import UseFetch from './../hooks/useFetch'


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
    const { results: popularMovies } = UseFetch('popular', 'movie')
    const { results: topRated } = UseFetch('top_rated', 'movie')
    const { results: nowPlaying } = UseFetch('upcoming', 'movie')

    return (
        <Container>

            { nowPlaying && <Carousel movieList={nowPlaying}></Carousel>}

            <ContainerMovieList>
                {popularMovies && <MovieList movies={popularMovies} listName='Peliculas Populares' />}
                {topRated && <MovieList movies={topRated} listName='Peliculas Mejor Puntuadas' />}
            </ContainerMovieList>
        </Container>
    )
}

export default Home