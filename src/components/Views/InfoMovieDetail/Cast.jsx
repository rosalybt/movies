import styled from 'styled-components'
import CastCard from './CastCard'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { Flex } from '../../Commons'

const Container = styled(Flex)`
width: 100%;
flex-flow: row wrap;
padding: ${({ theme }) => theme.padding.medium} 0
`

const Cast = (id) => {
    const casting = useFetch(`${id}/credits?`, 'movie')

    return (
        <Container justifyContent="center">

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