import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from './Pagination'
import MovieList from './MovieList'
import styled from 'styled-components'


const ContainerMovieList = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
padding: 20px 0 
`




const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRated, setTopRated] = useState([])
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

    return (
        <>

            <ContainerMovieList>
                <MovieList array={popularMovies} listName='Peliculas Populares' />
                <MovieList array={topRated} listName='Peliculas Mejor Puntuadas' />
            </ContainerMovieList>

            <Pagination />
        </>
    )
}

export default Home