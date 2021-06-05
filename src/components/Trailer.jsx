import styled from 'styled-components'
import useFetch from '../hooks/useFetch'

const VideoFrame = styled.iframe`
`
const Container = styled.div`
display: flex;
justify-content: center;
padding: 30px;
`

const Subtitle = styled.h2`
padding: 10%;
`

const Trailer = (id) => {

    const videos = useFetch(`${id}/videos`, 'movie')
    const msj = 'No disponible.'

    return (
        <Container>
            {videos.length ?
                <VideoFrame title={videos[0].name}
                    allowfullscreen
                    width="70%"
                    height="450"
                    src={`https://www.youtube.com/embed/${videos[0].key}` || `https://player.vimeo.com/video/${videos[0].key}`}
                />
                : <Subtitle>{msj}</Subtitle>
            }
        </Container>
    )
}

export default Trailer