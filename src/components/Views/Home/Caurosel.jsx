import React from 'react-dom'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Slider from 'react-styled-carousel';
// import ButtonSimple from '../../SharedComponents/Button'
import { BASE_URL_IMG_ORIGINAL, convertToUppercase } from '../../../utils/Variables';
import { Flex, Button } from '../../Commons'


//STYLES
const MoreInfoBox = styled(Flex)`
position: absolute;
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.textDark};
border-radius: ${({ theme }) => theme.sizes.small};
padding: ${({ theme }) => theme.padding.large};
bottom: ${({ theme }) => theme.sizes.large};
width: 50%;

@media screen and (max-width: 768px) {
    width: 90%;
  }

`
const Container = styled(Flex)`
position: relative;
height:60vh;
background: url(${props => props.urlImg || "none"}) no-repeat  ;
background-size: cover;

@media screen and (max-width: 768px) {
    height:30vh;
  }


`

const StyledButton = styled(Button)`
background-color: ${({ theme }) => theme.colors.secondary};
color:${({ theme }) => theme.colors.textDark} ;
border-radius: ${({ theme }) => theme.shapes.corner};
padding: ${({ theme }) => theme.padding.medium};
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
                    <StyledButton>
                        Ver mas detalles de la pelicula
                    </StyledButton>
                </Link>
            </MoreInfoBox>
        </Container >

    )
}

//COMPONENT
const Caurosel = ({ movieList }) => {

    let movies = movieList.map(({ id, title, overview, backdrop_path }) => {
        return {
            id: id,
            name: convertToUppercase(title),
            description: overview,
            img: backdrop_path
        }
    })

    return (

        < Slider
            cardsToShow={1}
            autoSlide
            padding="0px"
        >
            {movies.length && <Item key={1} item={movies[0]} />}
            {movies.length && <Item key={2} item={movies[1]} />}
            {movies.length && <Item key={3} item={movies[2]} />}
            {movies.length && <Item key={4} item={movies[3]} />}
            {movies.length && <Item key={5} item={movies[4]} />}
        </Slider >

    )
}

export default Caurosel
