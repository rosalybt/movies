import styled from 'styled-components'
import { Flex } from './Commons'

// STYLE
const Container = styled(Flex)`
width: 300px;
padding: 10px;
`
const ContainerCard = styled(Container)`
border: 1px solid ${({ theme }) => theme.colors.border};
`
const Title = styled.h3`
font-weight: 400;
`

const Card = ({ img, title }) => {
    let path = `https://image.tmdb.org/t/p/w500/`
    return (
        <ContainerCard >

            <Container
                flexDirection="column"
                alignItems="center">
                <img src={path + img} alt="movie poster" />
                imgen
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