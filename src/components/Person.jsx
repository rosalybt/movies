import styled from "styled-components";
import NavBar from './NavBarPerson'
import PersonInfoBox from "./PersonInfoBox";
import { BrowserRouter, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

const ContainerPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background-color: black;
`

const Person = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <ContainerPerson>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path={`/person/:id/info`} component={() => PersonInfoBox(id)} />
                    {/* <Route path={`/person/:id/credits`} component={() => PersonInfoBox} /> */}
                </Switch>
            </BrowserRouter>
        </ContainerPerson>
    )
}

export default Person