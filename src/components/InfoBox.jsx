import styled from "styled-components";
import Rating from "./Rating";
import SocialMediaBox from "./SocialMediaBox";
import UseFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { BASE_URL_IMG } from '../utils/Variables'

const Container = styled.div`
  display: flex;
flex-direction: ${(props) => props.flexDirection || "row"};
padding: ${(props) => props.padding || 0};
width: ${(props) => props.width || "100%"};
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
`;

const ContainerInfoBox = styled.section`
display: flex;
padding: 25px 90px;
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
background-color: black;
color: white;
`;


const InfoBox = () => {
    let { id } = useParams();
    const movie = UseFetch(id)

    return (
        <ContainerInfoBox padding="30px" width="80%" justifyContent="center">

            <Container width="20%">
                <img src={`${BASE_URL_IMG}${movie.backdrop_path}`} alt="img=pe" />
            </Container>

            <Container width="30%" flexDirection="column">
                <Container >
                    <Container >
                        <h2>{movie.title}</h2> <span>anio</span>
                    </Container>

                </Container>

                <Container flexDirection="column">
                    <Rating />

                    <h3>General</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                        culpa, pariatur, atq ue quaerat qui esse nam quia repellat
                        aliquam, velit possimus soluta corrupti impedit deserunt aut
                        necessitatibus quasi voluptatum nihil.
</p>

                    <p>Durancion:</p>

                    <p>Genero</p><ul>
                        <li>item</li>
                    </ul>

                    <p>Presupuesto:</p>
                    <p>Recuaudacion:</p>
                    <p>Produccion:</p>
                    <SocialMediaBox />

                </Container>
            </Container>

        </ContainerInfoBox>
    )
}

export default InfoBox