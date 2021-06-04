import styled from "styled-components";
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'
import NavBarInfo from "./NavInfo";
import InfoBox from "./InfoBox";
import Cast from "./Cast";
import SimilarMovies from './Similars'
import Trailer from "./Trailer";
import UseFetch from '../hooks/useFetch'
import { BASE_URL_IMG_ORIGINAL } from "../utils/Variables";


// STYLES
const ContainerMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`
const Container = styled(ContainerMoreInfo)`
flex-direction: ${(props) => props.flexDirection || "row"};
padding: ${(props) => props.padding || 0};
width: ${(props) => props.width || "100%"};
height: ${(props) => props.height || "100%"};
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
`
// COMPONENT

const MoreInfo = () => {
    let { id } = useParams()
    const { backdrop_path } = UseFetch(id)

    return (

        <ContainerMoreInfo >

            <Container height="100vh"  >
                <img src={`${BASE_URL_IMG_ORIGINAL}${backdrop_path}`} alt="postter" />
            </Container>
            <BrowserRouter>
                <Container flexDirection >
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
