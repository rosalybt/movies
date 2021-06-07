import React from 'react';
import styled from 'styled-components'
import { Pagination } from '@zendeskgarden/react-pagination';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { useState } from 'react';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom'

// STYLES
const Container = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px
`


/* COMPONENT */
const PaginationRounded = ({ page, totalPages }) => {
    const history = useHistory()
    const handleClick = (e) => history.push(`/new-movies/page/${e.target.textContent}`);

    const [initialState, setTinitialState] = useState({ currentPage: page, })

    return (
        <Container >
            <ThemeProvider>
                <Pagination
                    totalPages={totalPages}
                    currentPage={initialState.currentPage}
                    onChange={currentPage => setTinitialState({ currentPage })}
                    onClick={handleClick}
                />
            </ThemeProvider>
        </Container>
    );
}


export default PaginationRounded