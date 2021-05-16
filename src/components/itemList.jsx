import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FloatingButtons from './FloattingButton';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const ContainerItem = styled.div`
display: flex;
align-items: center;
padding: 0 5px;
justify-content: space-between;
border-bottom: 2px solid #f5f2f2;
`

const Container = styled(ContainerItem)`
border-bottom: none;`

const MovieTitle = styled.h4`
font-weight: lighter;
text-align: left;
`


const ItemList = ({ img, title }) => {
    const classes = useStyles();

    return (
        <ContainerItem>

            <Container className={classes.root}>
                <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w500/${img}`} />

                <MovieTitle>
                    {title}
                </MovieTitle>

            </Container>

            <Container>
                <FloatingButtons />
            </Container>
        </ContainerItem>
    )
}

export default ItemList