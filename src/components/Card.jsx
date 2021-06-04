import styled from 'styled-components'
import { BASE_URL_IMG_MEDIUM } from '../utils/Variables'
import { Flex } from './Commons'

// STYLE
const Container = styled(Flex)`
width: 300px;
height: ${props => props.height || 'auto'};
margin: ${props => props.margin || '0'};
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
margin-bottom:40px

`
const Title = styled.h4`
font-weight: 500;
width: 100%;
font-size: x-large;
text-align: left;
color: ${props => props.theme.colors.text}
`

const Image = styled.img`
object-fit: cover;
height: 100%;
box-shadow:2px 2px 5px -2px rgba(0,0,0,0.8)

`

const Card = ({ img, title }) => {

    return (
        <ContainerCard flexDirection="column" >

            <Container
                padding="0"
                radius="5px"
                height="100%"
            >
                <Image src={BASE_URL_IMG_MEDIUM + img} alt={`${title} poster`} />
            </Container>

            <Container
                flexDirection="column"
                alignItems="center">
                <Title aria-label="titulo">{title}</Title>
            </Container>

        </ContainerCard>
    )
}

export default Card