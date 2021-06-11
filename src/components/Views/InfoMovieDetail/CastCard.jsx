import styled from 'styled-components'
import { BASE_URL_IMG_MEDIUM, NOT_AVAILABLE } from '../../../utils/Variables'
import { Flex } from '../../Commons'

// STYLE
const Container = styled(Flex)`
width: ${({ theme }) => theme.sizes.cardWidth};
border-radius:${props => props.radius || '0'};
overflow: hidden;
`

const ContainerCard = styled(Container)`
margin: ${({ theme }) => theme.margin.medium}
`
const Title = styled.h3`
font-size: x-large;
text-align: left;
`
const SubTitle = styled.p`
font-size: large;
text-align: left;
`

const CastCard = ({ img, originalName, character }) => {

    return (
        <ContainerCard flexDirection="column">
            <Container
                radius="5px"
                shadow="2px 2px 2px -2px rgba(0,0,0,0.8)"
            >
                {img ?
                    <img src={BASE_URL_IMG_MEDIUM + img} alt={`foto de ${originalName}.`} />
                    : <img src={NOT_AVAILABLE} alt="no foto" />
                }
            </Container>

            <Container flexDirection="column" justifyContent="flex-start" aligItems>
                <Title aria-label="nombre del actor o actriz.">{originalName.toUpperCase()}</Title>
                <SubTitle>{character}</SubTitle>
            </Container>
        </ContainerCard>
    )
}

export default CastCard