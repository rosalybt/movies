import styled from "styled-components";
import { BrowserRouter, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
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
    let params = useParams()
    // console.log(kk)
    const { backdrop_path } = UseFetch(params.id)

    return (

        <ContainerMoreInfo >

            <Container height="100vh"  >
                <img src={`${BASE_URL_IMG_ORIGINAL}${backdrop_path}`} alt="postter" />
            </Container>
            <BrowserRouter>
                <NavBarInfo id={params} />
                <Switch>
                    <Route path={`/movie/${params.id}/info`} component={() => InfoBox(params.id)} />
                    <Route path={`/movie/${params.id}/cast`} component={Cast} />
                    <Route path={`/movie/${params.id}/${params.section}`} component={Trailer} />
                    <Route path={`/movie/${params.id}/${params.section}`} component={SimilarMovies} />
                </Switch>
            </BrowserRouter>



        </ContainerMoreInfo >

    );
};

export default MoreInfo;
