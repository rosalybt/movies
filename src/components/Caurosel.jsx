import styled from 'styled-components'
import Slider from 'react-styled-carousel';

//STYLES
const MoreInfoBox = styled.div`
position: absolute;
background: rgba(0,0,0,.3);
color: white;
text-align: center;
width: 50%;
padding: 1em;
bottom: 25px;
`
const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 60vh;
background: url(${props => props.urlImg || "none"}) no-repeat  ;
background-size: cover;
`

const Title = styled.h2`
font-weight: bolder;
`
//LOGIC
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original/'

const Item = ({ item }) => {

    return (

        <Container urlImg={`${BASE_URL_IMG + item.img}`} >
            <MoreInfoBox>
                <Title>{item.name}</Title>
                <p>{item.description}</p>
            </MoreInfoBox>
        </Container >

    )
}

//COMPONENT
const Caurosel = ({ movieList }) => {

    let movies = movieList.map(movie => {
        return {
            name: movie.title,
            description: movie.overview,
            img: movie.backdrop_path
        }
    })

    return (

        < Slider
            cardsToShow={1}
            autoSlide
            showArrows
            padding="0px"
        >
            {/* {solo me toma los desliza los slides si estan de esta manera,
             o sea componoentes tras componente } */}

            <Item item={movies[0]} />
            <Item item={movies[1]} />
            <Item item={movies[2]} />
            <Item item={movies[3]} />
            <Item item={movies[4]} />

            {/* {pero si lo tengo es un array no se desliza automaticamente,
                 solo si le doy click a los botones(dots)} */}

            {/* {  movies.map((movie, i) => <Item key={i} item={movie} />)} */}
        </Slider >

    )
}

export default Caurosel
