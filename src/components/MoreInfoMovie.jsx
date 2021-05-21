import styled from 'styled-components'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


const ContainerBox = styled.div`
position: ${props => props.position || "static"};
background: url(${props => props.urlImg || "none"}) no-repeat  ;
`
const InfoBox = styled.div`
display: flex;

`
const Container = styled(InfoBox)`
flex-direction:${props => props.position || "inherit"} ;
`


const MoreInfo = ({ id }) => {
    return (
        <ContainerBox urlImg>
            <InfoBox>
                <Container>
                    <img src="" alt="" />
                </Container>

                <Container>
                    <Container>
                        <Container>
                            <h2>Titulo</h2> <span>anio</span>
                        </Container>
                        <Container>
                            <PlayCircleOutlineIcon />
                            <span>Ver trailer</span>
                        </Container>
                    </Container>

                    <Container>
                        <h3>subtitulo</h3>
                        <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quam culpa, pariatur, atq
                        ue quaerat qui esse nam quia repellat aliquam,
                        velit possimus soluta corrupti impedit deserunt aut
                    necessitatibus quasi voluptatum nihil.</p>

                        <h3>subtitulo</h3>
                        <ul> lista
                        <li>
                                item
                        </li>
                        </ul>

                    </Container>
                </Container>
            </InfoBox>
        </ContainerBox>
    )
}

export default MoreInfo