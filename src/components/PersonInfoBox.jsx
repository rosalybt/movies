import styled from "styled-components";
import Rating from "./Rating";
import SocialMediaBox from "./SocialMediaBox";
import UseFetch from '../hooks/useFetch'
import { BASE_URL_IMG } from '../utils/Variables'
import { useParams } from "react-router";

const Container = styled.div`
  display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
padding: ${(props) => props.padding || 0};
width: ${(props) => props.width || "100%"};
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
`;

const ContainerInfoBox = styled.section`
display: flex;
flex-direction: row;
padding: 25px 90px;
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
background-color: black;
color: white;
`;


const PersonInfoBox = () => {
    let { id } = useParams()
    console.log(id, 'id')
    const person = UseFetch(`person/${id}`)
    console.log(person)

    return (
        <ContainerInfoBox padding="30px" width="50%" justifyContent="space-evenly">

            <Container width="25%">
                <img src={`${BASE_URL_IMG}${person.profile_path}`} width="100%" alt="img=pe" />
            </Container>

            <Container width="25%" flexDirection="column">
                <Container >
                    <Container >
                        <h2>{person.name}</h2> <span>{person.birthday}</span>
                    </Container>

                </Container>

                <Container flexDirection="column">
                    <Rating />

                    <h3>Biografia</h3>
                    <p>
                        {person.biography}
                    </p>

                    <SocialMediaBox />

                </Container>
            </Container>

        </ContainerInfoBox>
    )
}

export default PersonInfoBox