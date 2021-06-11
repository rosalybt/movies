import styled from 'styled-components'
import useFetch from '../../../hooks/useFetch'
import { Flex } from '../../Commons'

const VideoFrame = styled.iframe`
width:70%;
height:450px
`
const Container = styled(Flex)`
width:100%;
align-items: center;
padding: ${({ theme }) => theme.padding.medium};
`

const Subtitle = styled.h2`
padding: 10%;
`

const Trailer = (id) => {

    const videos = useFetch(`${id}/videos?`, 'movie')
    const msj = 'No disponible.'

    return (
        <Container
            justifyContent="center"
            alingItems="center"
        >
            {videos.length ?
                <VideoFrame title={videos[0].name}
                    allowfullscreen
                    src={`https://www.youtube.com/embed/${videos[0].key}` || `https://player.vimeo.com/video/${videos[0].key}`}
                />
                : <Subtitle>{msj}</Subtitle>
            }
        </Container>
    )
}

export default Trailer