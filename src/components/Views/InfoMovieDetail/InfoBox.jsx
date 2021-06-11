import styled from "styled-components";
import UseFetch from '../../../hooks/useFetch'
import { BASE_URL_IMG, NOT_AVAILABLE, convertToUppercase, getYear, formatToCurrency } from '../../../utils/Variables'
import { Flex, List } from '../../Commons'

const Container = styled(Flex)`
`;


const ContainerImagen = styled(Flex)`
width: ${(props) => props.width};
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
   width:45%;
   height: auto;
   justify-content: center;
  }
  @media screen and (max-width: 426px) {
   width:100%;
   justify-content: center;
  }

`

const ContainerInfo = styled(Flex)`
width: ${(props) => props.width};
padding:30px auto;

@media screen and (max-width: 768px) {
   margin:${(props) => props.theme.margin.small};
   width:90%
  }
`

const ContainerInfoBox = styled(Flex)`
background-color:${(props) => props.theme.colors.tertiary}; 
width: fit-content;
padding:  ${(props) => props.theme.padding.large};

@media screen and (max-width: 768px) {
  flex-wrap: wrap;
  justify-content: center;
  } 
`;

const Image = styled.img`
object-fit: cover;
object-position: center center;
width: 50%;
height: 50%;
border-radius: ${({ theme }) => theme.shapes.corner};

@media screen and (max-width: 768px) {
    height: 25vh;
    width: 100%;
  }
`
const Text = styled.p`
font-size:  ${({ theme }) => theme.sizes.p};
text-align: justify;
`

const Title = styled.h2`
font-size:  ${({ theme }) => theme.sizes.h2};
`
const SubTitle = styled.h3`
 margin: ${({ theme }) => theme.margin.medium} 0;
font-size:  ${({ theme }) => theme.sizes.h3};
display: inline;
`
const NoteHighlighter = styled.span`
margin: 0 ${({ theme }) => theme.margin.medium} ;
`
const ContainerText = styled(Flex)`
`


const InfoBox = (id) => {
    const { title: movieTitle, poster_path, release_date, overview,
        runtime, genres, production_companies, budget, revenue } = UseFetch(`${id}?`, 'movie')
    let IMAGE_PATH = BASE_URL_IMG + poster_path

    return (
        <ContainerInfoBox
            flexDirection="row"
            alignItems="center"
        >

            <ContainerImagen
                width="35%"
                justifyContent="center"
                alignItems="center"
            >
                {poster_path ?
                    <Image src={IMAGE_PATH} alt={`poster de la pelicula ${movieTitle}.`} />
                    : <Image src={NOT_AVAILABLE} alt="no foto" />
                }

            </ContainerImagen>

            <ContainerInfo
                width="60%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Container >
                    <Container >
                        <Title>{convertToUppercase(`${movieTitle}`)}</Title>
                        <Text><NoteHighlighter>{getYear(release_date)}</NoteHighlighter></Text>
                    </Container>

                </Container>

                <Container flexDirection="column"
                    justifyContent="center"
                    alignItems="center">

                    <SubTitle>General </SubTitle>
                    <Text>{overview}</Text>

                    <ContainerText alignItems="center">
                        <SubTitle>Durancion: </SubTitle>
                        <Text>{runtime} Minutos</Text>
                    </ContainerText>


                    <List>
                        <SubTitle>Genero: </SubTitle>
                        <ContainerText alignItems="center">
                            {genres && genres.map((genere, index) =>
                                <Text key={genere.id}> {index ? ', ' : ''}{genere.name}</Text>)}
                        </ContainerText>
                    </List>

                    <ContainerText alignItems="center">
                        <SubTitle> Presupuesto: </SubTitle><Text>{formatToCurrency(budget)}</Text>
                    </ContainerText>

                    <ContainerText alignItems="center">
                        <SubTitle> Recuaudacion:</SubTitle><Text>{formatToCurrency(revenue)} </Text>
                    </ContainerText>

                    <ContainerText alignItems="center">
                        <SubTitle> Produccion:</SubTitle>
                        <Text>
                            {
                                production_companies && production_companies.map(({ name, id }, index) => {
                                    return <Text key={id}>{name}</Text>
                                })
                            }
                        </Text>
                    </ContainerText >
                </Container>
            </ContainerInfo >

        </ContainerInfoBox >
    )
}

export default InfoBox