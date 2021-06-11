import styled from "styled-components";
import Rating from "../../SharedComponents/Rating";
import UseFetch from '../../../hooks/useFetch'
import { BASE_URL_IMG, NOT_AVAILABLE, convertToUppercase, getYear, formatToCurrency } from '../../../utils/Variables'
import { Flex, List } from '../../Commons'

const Container = styled(Flex)`
width: ${(props) => props.width || "100%"};
`;

const ContainerImg = styled(Flex)`
width: 50%;
align-items: center;
`

const ContainerInfoBox = styled(Flex)`
background-color:${(props) => props.theme.colors.tertiary}; 
width: fit-content;
padding:  ${(props) => props.theme.padding.large};
`;

const Image = styled.img`
object-fit: cover;
object-position: center center;
width: fit-content;
height: 400px;
border-radius: ${({ theme }) => theme.shapes.corner};
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
            justifyContent="center"
            alignItems="center"
            flexWrap >

            <Container
                width="40%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                padding="50px"
            >
                <ContainerImg
                    flexDirection
                    justifyContent
                    alignItems="flex-end"
                >
                    {poster_path ?
                        <Image src={IMAGE_PATH} alt={`poster de la pelicula ${movieTitle}.`} />
                        : <Image src={NOT_AVAILABLE} alt="no foto" />
                    }
                </ContainerImg>
            </Container>

            <Container
                width="40%"
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

                <Container flexDirection="column">
                    <Rating />

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


                    <SubTitle> Produccion:</SubTitle> <Text>
                        {
                            production_companies && production_companies.map(({ name, id }, index) => {
                                return <Text key={id}>{name}</Text>
                            })
                        }
                    </Text>
                </Container>
            </Container >

        </ContainerInfoBox >
    )
}

export default InfoBox