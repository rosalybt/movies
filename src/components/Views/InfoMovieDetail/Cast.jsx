import styled from 'styled-components'
import CastCard from './CastCard'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'

const Container = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content:center;
align-items: flex-start;
background-color: black;
padding: 20px 0
`

const Cast = (id) => {
    const casting = useFetch(`${id}/credits`, 'movie')

    return (
        <Container>

            {casting.cast && casting.cast.map((cast) => {
                return <Link to={`/person/${cast.id}/info`}>
                    <CastCard
                        key={cast.id}
                        img={cast.profile_path}
                        originalName={cast.name}
                        character={cast.character}
                    />
                </Link >
            })}

        </Container >
    )
}

export default Cast