import React from 'react-dom'

import styled from 'styled-components'
import Slider from 'react-styled-carousel';
import ButtonSimple from './Button'

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
                <ButtonSimple
                    content="Ver mas... "
                    bgcolor="#1883ba"
                    color="#fff"
                    radius="5px"
                    padding="10px 15px"
                />
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
            // infinite
            padding="0px"
        >
            {/* {solo me toma los desliza los slides si estan de esta manera,
             o sea componoentes tras componente } */}

            {movies.length && <Item key={1} item={movies[0]} />}
            {movies.length && <Item key={2} item={movies[1]} />}
            {movies.length && <Item key={3} item={movies[2]} />}
            {movies.length && <Item key={4} item={movies[3]} />}
            {movies.length && <Item key={5} item={movies[4]} />}


            {/* {pero si lo tengo es un array no se desliza automaticamente,
                 solo si le doy click a los botones(dots)} */}

            {/* {  movies.map((movie, i) => <div> <Item key={i} item={movie} /></div>)} */}
        </Slider >

    )
}

export default Caurosel
