import styled from "styled-components";
import NavBar from './NavBarPerson'

const ContainerPerson = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  background-color: black;
`

const Person = () => {
    return (
        <ContainerPerson>
            <NavBar />
        </ContainerPerson>
    )
}

export default Person