import styled from "styled-components";
import NavBar from './NavBarPerson'
import PersonInfoBox from "./PersonInfoBox";
import CreditsBox from './CreditsPersonBox'
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'

const ContainerPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background-color: black;
`

const Person = () => {
    const { id } = useParams()

    return (
        <ContainerPerson>
            <BrowserRouter>
                <NavBar personID={id} />
                <Switch>
                    <Route path={`/person/:id/info`} component={PersonInfoBox} />
                    <Route path={`/person/:id/credits`} component={CreditsBox} />
                </Switch>
            </BrowserRouter>
        </ContainerPerson>
    )
}

export default Person