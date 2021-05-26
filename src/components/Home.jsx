import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Pagination from './Pagination'
import MovieList from './MovieList'
import Carousel from './Caurosel'


const ContainerMovieList = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
padding: 20px 0 
`

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRated, setTopRated] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a3c153949fde18432538e84197afdd2c&language=en-US`)
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))

    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=a3c153949fde18432538e84197afdd2c&language=en-US`)
            .then(res => res.json())
            .then(data => setTopRated(data.results))

    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a3c153949fde18432538e84197afdd2c&language=en-US`)
            .then(res => res.json())
            .then(data => setNowPlaying(data.results))
    }, [])

    return (
        <>
            <Carousel movieList={nowPlaying}></Carousel>

            <ContainerMovieList>
                <MovieList movies={popularMovies} listName='Peliculas Populares' />
                <MovieList movies={topRated} listName='Peliculas Mejor Puntuadas' />
            </ContainerMovieList>
        </>
    )
}

export default Home