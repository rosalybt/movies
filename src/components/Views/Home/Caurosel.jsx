import React from 'react-dom'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slider from 'react-styled-carousel';
import ButtonSimple from '../../SharedComponents/Button'
import { BASE_URL_IMG_ORIGINAL } from '../../../utils/Variables'
import { Flex } from '../../Commons'


//STYLES
const MoreInfoBox = styled(Flex)`
position: absolute;
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
border-radius: ${({ theme }) => theme.sizes.small};
padding: ${({ theme }) => theme.padding.large};
bottom: ${({ theme }) => theme.sizes.large};
width: 50%;

`
const Container = styled(Flex)`
position: relative;
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

const Description = styled.p`
text-align: justify;
margin:${({ theme }) => theme.margin.medium} 0;
`
//LOGIC



const Item = ({ item }) => {

    return (

        <Container
            urlImg={`${BASE_URL_IMG_ORIGINAL + item.img}`}
            justifyContent="center"
            alignItems="normal"
        >
            <MoreInfoBox
                flexDirection="column"
                alignItems="center"
            >
                <Title>{item.name}</Title>
                <Description>{item.description}</Description>
                <Link to={`/movie/${item.id}/info`}>
                    <Button
                        content="Ver mas detalles de la pelicula"
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
