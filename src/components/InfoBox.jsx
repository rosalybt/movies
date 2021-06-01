import styled from "styled-components";
import Rating from "./Rating";
import SocialMediaBox from "./SocialMediaBox";
import UseFetch from '../hooks/useFetch'
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
flex-direction: row;
padding: 25px 90px;
justify-content: ${(props) => props.justifyContent || "Inherited"} ;
background-color: black;
color: white;

`;


const InfoBox = (id) => {
    const movie = UseFetch(id)

    return (
        <ContainerInfoBox padding="30px" width="50%" justifyContent="space-evenly">

            <Container width="25%">
                <img src={`${BASE_URL_IMG}${movie.poster_path}`} width="100%" alt="img=pe" />
            </Container>

            <Container width="25%" flexDirection="column">
                <Container >
                    <Container >
                        <h2>{movie.title}</h2> <span>{movie.release_date}</span>
                    </Container>

                </Container>

                <Container flexDirection="column">
                    <Rating />

                    <h3>General</h3>
                    <p>
                        {movie.overview}
                    </p>

                    <p>Durancion: {movie.runtime}</p>

                    <ul>
                        <p>Genero</p>
                        {movie.genres && movie.genres.map((genere) => <li key={genere.id}>{genere.name}</li>)}
                    </ul>

                    <p>Presupuesto:{movie.budget}</p>
                    <p>Recuaudacion:{movie.revenue} </p>

                    <p>Produccion: </p>
                    {
                        movie.production_companies && movie.production_companies.map(companies => {
                            return <span key={companies.id} >{companies.name}</span>
                        })
                    }


                    <SocialMediaBox />

                </Container>
            </Container>

        </ContainerInfoBox>
    )
}

export default InfoBox