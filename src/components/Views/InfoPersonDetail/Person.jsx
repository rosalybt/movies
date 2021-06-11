import styled from "styled-components";
import NavBar from './NavBarPerson'
import PersonInfoBox from "./PersonInfoBox";
import CreditsBox from './CreditsPersonBox'
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom'
import { Flex } from '../../Commons'

const ContainerPerson = styled(Flex)`
  padding: ${({ theme }) => theme.padding.medium};
  background-color:${({ theme }) => theme.colors.tertiary};
`

const Person = () => {
    const { id } = useParams()

    return (
        <ContainerPerson justifyContent="center" flexDirection="column">
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