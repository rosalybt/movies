import styled from "styled-components";
import Rating from "../../SharedComponents/Rating";
import SocialMediaBox from "../../SharedComponents/SocialMediaBox";
import UseFetch from '../../../hooks/useFetch'
import { BASE_URL_IMG } from '../../../utils/Variables'
import { useParams } from "react-router";

const Container = styled.div`
  display: flex;

flex-direction: ${(props) => props.flexDirection || "row"};
padding: ${(props) => props.padding || 0};
margin: ${(props) => props.margin || 0};
width: ${(props) => props.width || "100%"};
height: ${(props) => props.height || "100%"};
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
`;

const ContainerInfoBox = styled.section`
display: flex;
flex-wrap: wrap;
/* flex-direction: row; */
padding: 25px 90px;
flex-direction: row;
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
background-color: black;
color: white;
`;


const Image = styled.img`
height: 400px;
width: 300px;
`


const PersonInfoBox = () => {
    let { id } = useParams()
    const person = UseFetch(id, 'person')

    return (
        <ContainerInfoBox padding="20px" justifyContent="space-around">

            <Container height="auto" width="25%">
                <Image src={`${BASE_URL_IMG}${person.profile_path}`} alt={`foto de ${person.name}`} />
            </Container>

            <Container flexDirection="column" width="50%" >
                <Container >
                    <Container flexDirection="column" >
                        <h2>{person.name}</h2> <span>{person.birthday}</span>
                        <p>{person.place_of_birth}</p>
                    </Container>

                </Container>
                <br />
                <Container flexDirection="column" >
                    <Rating />

                    {person.biography && <> <h3>Biografia</h3>  <p>{person.biography}</p></>}

                    <SocialMediaBox />

                </Container>
            </Container>

        </ContainerInfoBox >
    )
}

export default PersonInfoBox