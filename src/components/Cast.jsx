import styled from 'styled-components'
import CastCard from './CastCard'


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