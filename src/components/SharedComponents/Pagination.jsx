import styled from 'styled-components'
import { Pagination } from '@zendeskgarden/react-pagination';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { getRootURL } from '../../utils/Variables'

// STYLES
const Container = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px
`

/* COMPONENT */
const PaginationRounded = ({ page = 1, totalPages = 1 }) => {
    const { push, location } = useHistory()
    const URL = getRootURL(location.pathname)
    // ojo con las mayusculas aca, deberia ser setInitialState
    // por que este estado es un objeto si solo guarda un valor? podria ser currentPage y ya 
    const [initialState, setTinitialState] = useState({ currentPage: parseInt(page), })

    return (
        <Container >
            <ThemeProvider>
                <Pagination
                    totalPages={totalPages}
                    currentPage={initialState.currentPage}
                    onChange={(currentPage) => setTinitialState({ currentPage })}
                    onClick={(e) => push(`${URL}${e.target.textContent}`)}
                />
            </ThemeProvider>
        </Container>
    );
}


export default PaginationRounded
