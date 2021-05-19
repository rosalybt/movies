import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import styled from 'styled-components'
import Logo from '../logo.png'

// STYLE
const Container = styled.div`
border-bottom: 1px solid #e8e8ee;
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
border-bottom: none;
box-sizing:border-box
`
const Title = styled.h3`
font-weight: 400;
`

const Card = ({ img, title }) => {
    let path = `https://image.tmdb.org/t/p/w500/`
    return (
        <ContainerCard >

            <Container>
                <img src={path + img} alt="movie poster" />
                imgen
            </Container>

            <Container>
                <Title aria-label="titulo">{title}</Title>
            </Container>

            <Container color>
                <VisibilityOutlinedIcon />
            </Container>
        </ContainerCard>
    )
}

export default Card