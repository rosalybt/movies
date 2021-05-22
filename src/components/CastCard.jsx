import styled from 'styled-components'

// STYLE
const Container = styled.div`
width: 300px;
padding: 10px;
background-color: ${props => props.color && '#fafafa'};
display: flex;
flex-direction: column;
align-items: center;
box-sizing:border-box
`
const ContainerCard = styled(Container)`
padding:0;
border: 1px solid #e8e8e8;
box-sizing:border-box
`
const Title = styled.h3`
font-weight: 400;
`

const CastCard = ({ img, name, originalName }) => {
    const PATH = `https://image.tmdb.org/t/p/w500/`;
    return (
        <ContainerCard >
            <Container>
                <img src={PATH + img} alt={`${name} photograph`} />
                imgen
            </Container>

            <Container>
                <Title aria-label="name">{name}</Title>
                <p>{originalName}</p>
            </Container>
        </ContainerCard>
    )
}

export default CastCard