import styled from "styled-components";
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'
import NavBarInfo from "./NavInfo";
import InfoBox from "./InfoBox";
import Cast from "./Cast";
import SimilarMovies from './Similars';
import Trailer from "./Trailer";
import UseFetch from '../../../hooks/useFetch'
import { BASE_URL_IMG_ORIGINAL } from "../../../utils/Variables";
import { Flex } from '../../Commons'

// STYLES
const ContainerMoreInfo = styled(Flex)`
overflow: hidden;
background-color: ${(props) => props.theme.colors.tertiary}; ;
`
const Container = styled(Flex)`
padding: ${(props) => props.padding || 0};
width: ${(props) => props.width};
height: ${(props) => props.height};
background-color: ${({ theme }) => theme.colors.tertiary};
`

const ContainerPost = styled(Flex)`
width: 100vw;
height: 100vh;

@media screen and (max-width: 768px) {
    height: 50vh;
  }
`

const Image = styled.img`
object-fit: cover;
object-position: center center;
width: 100vw;
height: 100vh;
`
// COMPONENT

const MoreInfo = () => {
    let { id } = useParams()
    const { backdrop_path } = UseFetch(`${id}?`, 'movie')

    // este componente no se vuelve a renderear cuando hago click en una de las peliculas de similares
    // repensalo: cada uno de esos componentes hace un fetch, cuando deberia ser este, el padre de todos, el que haga ese fetch
    // y deberia hacer ese fetch cada vez que cambia la variable id de params

    return (

        <ContainerMoreInfo
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <ContainerPost height="100vh" justifyContent>
                <Image src={`${BASE_URL_IMG_ORIGINAL}${backdrop_path}`} alt="poster" />
            </ContainerPost>

            <BrowserRouter>

                <Container
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <NavBarInfo movieID={id} />
                    <Switch>
                        <Route path={`/movie/${id}/info`} component={() => InfoBox(id)} />
                        <Route path={`/movie/${id}/cast`} component={() => Cast(id)} />
                        <Route path={`/movie/${id}/trailer`} component={() => Trailer(id)} />
                        <Route path={`/movie/${id}/similars`} component={() => SimilarMovies(id)} />
                    </Switch>
                </Container>

            </BrowserRouter>



        </ContainerMoreInfo >

    );
};

export default MoreInfo;
