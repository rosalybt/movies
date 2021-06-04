import styled from 'styled-components'
import { BASE_URL_IMG_MEDIUM } from '../utils/Variables'


// STYLE
const Container = styled.div`
width: 300px;
padding: ${props => props.padding && '10px'};
margin: ${props => props.margin && '0'};;
display: flex;
justify-content:${props => props.justifyContent || 'center'} ;
flex-direction: column;
align-items: ${props => props.aligItems || 'center'};
box-shadow: ${props => props.shadow || 'none'};
border-radius:${props => props.radius || '0'};
overflow: hidden;
box-sizing:border-box
`
const ContainerCard = styled(Container)`
padding:0;
/* border: 1px solid #e8e8e8; */
box-sizing:border-box;
color: white;
margin: 10px
`
const Title = styled.h3`
font-weight: 700;
font-size: x-large;
margin :0;
text-align: left;
`
const SubTitle = styled.p`
margin: 0;
font-size: large;
text-align: left;
`

const CastCard = ({ img, originalName, character }) => {

    return (
        <ContainerCard >
            <Container padding="0" radius="5px" shadow="2px 2px 2px -2px rgba(0,0,0,0.8)">
                {img ? <img src={BASE_URL_IMG_MEDIUM + img} alt={`foto de ${originalName}.`} /> : <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg" alt="no foto" />}
            </Container>

            <Container justifyContent="flex-start" aligItems="flex-start">
                <Title aria-label="nombre del actor o actriz.">{originalName.toUpperCase()}</Title>
                <SubTitle>{character}</SubTitle>
            </Container>
        </ContainerCard>
    )
}

export default CastCard