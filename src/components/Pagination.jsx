import React from 'react';
import styled from 'styled-components'
// import Pagination from '@material-ui/lab/Pagination';
// import '@zendeskgarden/react-pagination/dist/styles.css';
import { Pagination } from '@zendeskgarden/react-pagination';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { useState } from 'react';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 20px
`

const PaginationRounded = () => {
    const [initialState, setTinitialState] = useState({
        currentPage: 1,
    })

    return (
        <Container >
            <ThemeProvider>
                <Pagination
                    totalPages={10}
                    currentPage={initialState.currentPage}
                    onChange={currentPage => setTinitialState({ currentPage })} />
            </ThemeProvider>
        </Container>
    );
}


export default PaginationRounded