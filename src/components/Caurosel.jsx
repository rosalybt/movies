import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'


const MoreInfoBox = styled.div`
position: absolute;
background: rgba(0,0,0,.3);
color: white;
text-align: center;
width: 65%;
padding: 1em;
bottom: 25px;
`

const Container = styled(Paper)`
position: relative;
display: flex;
justify-content: center;
height: 60vh;
background: url(${props => props.urlImg || "none"}) no-repeat  ;
background-size: cover;
`

const CaouroselSimple = styled(Carousel)`
margin-bottom: 3em;
`
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original/'

const Item = ({ item }) => {

    return (
        <Container urlImg={`${BASE_URL_IMG + item.img}`} >
            <MoreInfoBox>
                <h2><strong>{item.name}</strong></h2>
                <p>{item.description}</p>
            </MoreInfoBox>
        </Container >
    )
}

const Caurosel = ({ movieList }) => {

    let movies = movieList.map((movie) => {
        return {
            name: movie.title,
            description: movie.overview,
            img: movie.backdrop_path
        }
    })

    return (
        <CaouroselSimple >
            { movies.map((movie, i) => <Item key={i} item={movie} />)}
        </CaouroselSimple>
    )
}

export default Caurosel
