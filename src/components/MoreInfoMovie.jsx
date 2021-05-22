import styled from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ButtonSimple from "./Button";
import NavBarInfo from "./NavInfo";
import InfoBox from "./InfoBox";


const ContainerMoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Container = styled(ContainerMoreInfo)`
flex-direction: ${(props) => props.flexDirection || "row"};
padding: ${(props) => props.padding || 0};
width: ${(props) => props.width || "100%"};
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
`;

const MoreInfo = ({ id }) => {
    return (
        <ContainerMoreInfo >

            <Container height="90vh" width="fit-content">
                <img src="kk" alt="postter" />
            </Container>

            <BrowserRouter>
                <NavBarInfo />
                <Switch>
                    <Route exact path="/info" component={InfoBox} />
                    <Route path="/cast" component={InfoBox} />
                    <Route path="/trailer" component={InfoBox} />
                    <Route path="/similars" component={InfoBox} />
                </Switch>


            </BrowserRouter>





        </ContainerMoreInfo >
    );
};

export default MoreInfo;
