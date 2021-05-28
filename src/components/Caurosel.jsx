import React from 'react-dom'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slider from 'react-styled-carousel';
import ButtonSimple from './Button'
import { BASE_URL_IMG } from '../utils/Variables'


//STYLES
const MoreInfoBox = styled.div`
position: absolute;
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
text-align: center;
width: 50%;
padding: 1em;
bottom: 25px;
border-radius: 5px;
`
const Container = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 60vh;
background: url(${props => props.urlImg || "none"}) no-repeat  ;
background-size: cover;
`

const Button = styled(ButtonSimple)`
background-color: ${({ theme }) => theme.colors.secondary};
color:${({ theme }) => theme.colors.text} ;
`

const Title = styled.h2`
font-weight: bolder;

`
//LOGIC



const Item = ({ item }) => {

    return (

        <Container urlImg={`${BASE_URL_IMG + item.img}`} >
            <MoreInfoBox>
                <Title>{item.name}</Title>
                <p>{item.description}</p>
                <Link exact to={`/movies/${item.id}`}>
                    <Button
                        content="Ver mas... "
                        bgcolor="#1883ba"
                        color="#fff"
                        radius="5px"
                        padding="10px 15px"
                    />
                </Link>
            </MoreInfoBox>
        </Container >

    )
}

//COMPONENT
const Caurosel = ({ movieList }) => {

    let movies = movieList.map(movie => {
        return {
            id: movie.id,
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
