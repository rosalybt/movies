import Item from './itemList'
import styled from 'styled-components'

//STYLES
const List = styled.ul`
list-style-type: none;
`

const ContainerMovieList = styled.div`
display: flex;
flex-direction: column;
max-width:425px;
height: 550px
`
const ContainerTitle = styled.div`
background-color: ${props => props.theme.colors.primary};
height: min-content;
`
const Title = styled.h2`
color: ${props => props.theme.colors.text};
text-align: center;
margin:  ${({ theme }) => theme.margin.medium} 0
`
const Container = styled.div`
overflow-y: scroll;
overflow-x: hidden;
border: 1px solid #e8e8e8;
`

//COMPONENT
const MovieList = ({ movies, listName }) => {

    return (
        <ContainerMovieList>
            <ContainerTitle>
                <Title>
                    {listName}
                </Title>
            </ContainerTitle>
            <Container>
                <List>
                    {movies.map(movie => {

                        return (
                            <li key={movie.id}>
                                <Item
                                    img={movie.backdrop_path}
                                    title={movie.title}
                                />
                            </li>
                        )

                    })}
                </List>
            </Container>
        </ContainerMovieList>
    )
}


export default MovieList