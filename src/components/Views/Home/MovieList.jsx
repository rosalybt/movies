import Item from './itemList'
import styled from 'styled-components'
import { Flex, List, ListItem } from '../../Commons'

//STYLES
const ContainerMovieList = styled(Flex)`
max-width:425px;
height: 550px
`
const ContainerTitle = styled(Flex)`
padding:  ${({ theme }) => theme.padding.medium} 0;
background-color: ${props => props.theme.colors.primary};
width: 100%;

`
const Title = styled.h2`
color: ${props => props.theme.colors.textDark};
text-align: center;
`
const Container = styled(Flex)`
overflow-y: scroll;
overflow-x: hidden;
border: 1px solid #e8e8e8;
`

//COMPONENT
const MovieList = ({ movies, listName }) => {

    return (
        <ContainerMovieList flexDirection="column">

            <ContainerTitle justifyContent="center">
                <Title> {listName} </Title>
            </ContainerTitle>

            <Container>
                <List>
                    {movies.map(movie => {

                        return (
                            <ListItem key={movie.id}>
                                <Item
                                    id={movie.id}
                                    img={movie.backdrop_path}
                                    title={movie.title}
                                />
                            </ListItem>
                        )

                    })}
                </List>
            </Container>
        </ContainerMovieList>
    )
}


export default MovieList