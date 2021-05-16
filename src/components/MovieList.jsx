import Item from './ItemList'
import styled from 'styled-components'


const List = styled.ul`
list-style-type: none;
`

const ContainerMovieList = styled.div`
display: flex;
flex-direction: column;
max-width:500px;
height: 550px
`

const ContainerTitle = styled.div`
background-color: black;
height: min-content;
`
const Title = styled.h2`
color: white;
text-align: center;
`

const Container = styled.div`
overflow-y: scroll
`


const MovieList = ({ array, listName }) => {
    return (
        <ContainerMovieList>
            <ContainerTitle>
                <Title>
                    {listName}
                </Title>
            </ContainerTitle>
            <Container>
                <List>
                    {array.map(movie => {
                        return (
                            <li>
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