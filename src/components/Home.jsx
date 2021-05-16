import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from './Pagination'
import MovieList from './MovieList'





const Home = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a3c153949fde18432538e84197afdd2c&language=en-US`)
            .then(res => res.json())
            .then(data => setList(data.results))

    }, [])

    return (
        <>
            <p>Soy home</p>
            <MovieList array={list} listName='Peliculas Populares' />
            <MovieList array={list} listName='Peliculas Populares' />
            <Pagination />
        </>
    )
}

export default Home