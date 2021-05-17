import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 20px
`

const PaginationRounded = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </Container>
    );
}


export default PaginationRounded