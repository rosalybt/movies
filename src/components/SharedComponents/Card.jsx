import styled from 'styled-components'
import { BASE_URL_IMG_MEDIUM, NOT_AVAILABLE } from '../../utils/Variables'
import { Flex } from '../Commons'

// STYLE
const Container = styled(Flex)`
`

const ContainerImg = styled(Container)`
height:90%;
`
const ContainerCard = styled(Container)`
transition: all 1s ease;
margin-bottom:${({ theme }) => theme.margin.large};
width:${({ theme }) => theme.sizes.cardWidth};
height:${({ theme }) => theme.sizes.cardHeight};

&:hover{transform: scale(1.04);}
`
const Title = styled.h4`
font-weight: 500;
margin-top:${({ theme }) => theme.margin.medium};
width: 100%;
font-size: large;
text-align: left;
color: ${({ theme }) => theme.colors.text}
`

const Image = styled.img`
object-fit: cover;
height: 100%;
width:fit-content;
border-radius: ${({ theme }) => theme.shapes.corner};
box-shadow:2px 2px 5px -2px rgba(0,0,0,0.8);

`

const Card = ({ img, title }) => {
    return (
        <ContainerCard flexDirection="column" >

            <ContainerImg justifyContent>
                <Image
                    src={img ? BASE_URL_IMG_MEDIUM + img : NOT_AVAILABLE}
                    alt={`${title} poster`}
                />
            </ContainerImg>

            <Container
                flexDirection="column"
                alignItems="center">
                <Title aria-label="titulo">{title}</Title>
            </Container>

        </ContainerCard>
    )
}

export default Card