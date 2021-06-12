import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Flex, Button } from '../../Commons'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// STYLES
const ContainerItem = styled(Flex)`
padding: 0 ${({ theme }) => theme.margin.medium};
margin: ${({ theme }) => theme.margin.small} 0;
border-bottom: ${({ theme }) => theme.colors.border};

`
const Avatar = styled.img`
border-radius: ${props => props.theme.shapes.rounded};
width: 40px;
height: 40px;
object-fit: cover;
`
const Container = styled(Flex)`
margin: ${({ theme }) => theme.margin.small} 0;
border-bottom: none;
width:100%;
`
const MovieTitle = styled.h4`
font-weight: lighter;
text-align: justify;

margin: 0 ${({ theme }) => theme.margin.medium};
`

const StyledButton = styled(Button)`
border-radius: ${({ theme }) => theme.shapes.rounded};
color: ${({ theme }) => theme.colors.textDark};
padding: ${({ theme }) => theme.padding.medium};
background-color:${({ theme }) => theme.colors.secondary}
`

// COMPONENT
const ItemList = ({ id, img, title }) => {

    return (
        <ContainerItem
            alignItems="center"
            justifyContent="space-between"
            flexDirection

        >
            <Container alignItems="center"
                justifyContent="space-between" >

                <Container justifyContent="space-between" alignItems="center" >
                    <Avatar
                        aria-label="poster de pelicula"
                        src={`https://image.tmdb.org/t/p/w500/${img}`}
                    />

                    <Container>
                        <MovieTitle> {title}</MovieTitle>
                    </Container>


                    <Link to={`/movie/${id}/info`}>
                        <StyledButton aria-label="mas informacion" >
                            <ChevronRightIcon />
                        </StyledButton>
                    </Link>
                </Container>

            </Container>


        </ContainerItem>
    )
}

export default ItemList