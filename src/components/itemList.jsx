import React from 'react';
import styled from 'styled-components'
import FloatingButtons from './FloattingButton';

// STYLES
const ContainerItem = styled.div`
display: flex;
align-items: center;
padding: 0 5px;
justify-content: space-between;
border-bottom: 2px solid #f5f2f2;
`
const Avatar = styled.img`
border-radius: 50%;
width: 40px;
height: 40px;
object-fit: cover;
`
const Container = styled(ContainerItem)`
border-bottom: none;
border-radius: ${props => props.radius || 0};
height: ${props => props.height};
width: ${props => props.width};
border-radius: ${props => props.radius};
`
const MovieTitle = styled.h4`
font-weight: lighter;
text-align: left;
margin-left: 5px;
`

// COMPONENT
const ItemList = ({ img, title }) => {

    return (
        <ContainerItem>
            <Container >
                <Container height="40px" width="40px" radius="100%" >
                    <Avatar
                        aria-label="poster de pelicula"
                        src={`https://image.tmdb.org/t/p/w500/${img}`} />
                </Container>

                <MovieTitle>
                    {title}
                </MovieTitle>
            </Container>

            <Container>
                <FloatingButtons />
            </Container>
        </ContainerItem>
    )
}

export default ItemList