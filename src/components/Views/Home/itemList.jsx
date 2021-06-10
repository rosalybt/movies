import React from 'react';
import styled from 'styled-components'
import Button from '../../SharedComponents/Button';
import { Link } from 'react-router-dom';
import { Flex } from '../../Commons'
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
border-radius: ${props => props.theme.shapes.rounded};
border-radius: ${props => props.radius};
`
const MovieTitle = styled.h4`
font-weight: lighter;
text-align: left;
margin-left: ${({ theme }) => theme.margin.medium};
`

// COMPONENT
const ItemList = ({ id, img, title }) => {

    return (
        <ContainerItem
            alignItems="center"
            justifyContent="space-between"
        >
            <Container alignItems="center" >

                <Container >
                    <Avatar
                        aria-label="poster de pelicula"
                        src={`https://image.tmdb.org/t/p/w500/${img}`}
                    />
                </Container>

                <Container >
                    <MovieTitle> {title}</MovieTitle>
                </Container>

            </Container>

            <Container>
                <Link to={`/movie/${id}/info`}>
                    <Button
                        content={<ChevronRightIcon />}
                        radius="50%"
                        color="#fff"
                        padding="8px 10px"
                        aria-label="mas informacion" />
                </Link>
            </Container>
        </ContainerItem>
    )
}

export default ItemList