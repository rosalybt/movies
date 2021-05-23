import styled from 'styled-components'

const VideoFrame = styled.iframe`
`
const Container = styled.div`
display: flex;
justify-content: center;
padding: 30px;
`
const Trailer = ({ title }) => {
    return (
        <Container>
            <VideoFrame title={title}
                width="70%"
                height="400"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0" />
        </Container>
    )
}

export default Trailer