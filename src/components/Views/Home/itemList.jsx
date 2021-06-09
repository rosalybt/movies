import React from 'react';
import styled from 'styled-components'
import Button from '../../SharedComponents/Button';
import { Link } from 'react-router-dom';
import { Flex } from '../../Commons'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// STYLES
const ContainerItem = styled(Flex)`
padding: 0 5px;
margin: ${({ theme }) => theme.margin.small} 0;
border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`
const Avatar = styled.img`
border-radius: ${props => props.theme.shapes.rounded};
width: 40px;
height: 40px;
object-fit: cover;
`
const Container = styled(ContainerItem)`
border-bottom: none;
border-radius: ${props => props.theme.shapes.rounded};
height: ${props => props.height};
width: ${props => props.width};
border-radius: ${props => props.radius};
`
const MovieTitle = styled.h4`
font-weight: lighter;
text-align: left;
margin-left: 15px;
`

// COMPONENT
const ItemList = ({ id, img, title }) => {

    return (
        <ContainerItem
            alignItems="center"
            justifyContent="space-between"
        >
            <Container >
                <Container height="40px" width="40px"  >
                    <Avatar
                        aria-label="poster de pelicula"
                        src={`https://image.tmdb.org/t/p/w500/${img}`} />
                </Container>

                <MovieTitle>
                    {title}
                </MovieTitle>
            </Container>

            <Container>
                <Link to={`/movie/${id}/info`}>
                    <Button
                        content={<ChevronRightIcon />}
                        radius="50%"
                        padding="8px 10px"
                        aria-label="mas informacion" />
                </Link>
            </Container>
        </ContainerItem>
    )
}

export default ItemList