import styled from 'styled-components'
import CastCard from './CastCard'


const Title = styled.h2`
font-weight: 500;
`


const Container = styled.div`
display: flex;
justify-content: space-evenly;
padding: 20px;
`


const Cast = () => {
    return (
        <Container>
            <CastCard />
        </Container >
    )
}

export default Cast