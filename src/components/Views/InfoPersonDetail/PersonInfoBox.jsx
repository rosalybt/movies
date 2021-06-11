import styled from "styled-components";
import UseFetch from '../../../hooks/useFetch'
import { BASE_URL_IMG } from '../../../utils/Variables'
import { useParams } from "react-router";
import { Flex } from '../../Commons'

const Container = styled(Flex)`
padding: ${(props) => props.padding || 0};
margin: ${(props) => props.margin || 0};
width: ${(props) => props.width || "100%"};
height: ${(props) => props.height || "100%"};

`;

const ContainerInfoBox = styled(Flex)`
padding: ${({ theme }) => theme.padding.large};
width:100%;
background-color: ${({ theme }) => theme.colors.tertiary};
margin: auto;

@media screen and (max-width: 768px) {
   flex-wrap:wrap;
   justify-content: center;
   margin: ${({ theme }) => theme.margin.medium};
  }
  @media screen and (min-width: 1024px) {
max-width: 1024px;
  }
`;


const Image = styled.img`
object-fit: cover;
object-position: center center;
width: 100%;
border-radius: ${({ theme }) => theme.shapes.corner};

@media screen and (max-width: 768px) {
    height: 25vh;
    /* width: 100%; */
  }

`

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

const Text = styled.p`
font-size:  ${({ theme }) => theme.sizes.p};
text-align: justify;
overflow: hidden;
    text-overflow: ellipsis;
`

const Title = styled.h2`
font-size:  ${({ theme }) => theme.sizes.h2};
`
const SubTitle = styled.h3`
 margin: ${({ theme }) => theme.margin.medium} 0;
font-size:  ${({ theme }) => theme.sizes.h3};
display: inline;
`


const PersonInfoBox = () => {
    let { id } = useParams()
    const person = UseFetch(`${id}?`, 'person')

    return (
        <ContainerInfoBox justifyContent="space-around" alignItems="flex-start">

            <ContainerImagen height="auto" width="25%">
                <Image src={`${BASE_URL_IMG}${person.profile_path}`} alt={`foto de ${person.name}`} />
            </ContainerImagen>

            <ContainerInfo flexDirection="column" width="50%" >
                <Container >
                    <Container flexDirection="column" >
                        <Title>{person.name}</Title> <span>{person.birthday}</span>
                        <Text>{person.place_of_birth}</Text>
                    </Container>

                </Container>
                <br />
                <Container flexDirection="column" >

                    {person.biography && <> <SubTitle>Biografia</SubTitle>  <Text>{person.biography}</Text></>}

                </Container>
            </ContainerInfo>

        </ContainerInfoBox >
    )
}

export default PersonInfoBox