import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: "40px",
            height: "40px",
            color: "white",
            boxShadow: "none"
        },
    },
}));

const FloatingButtons = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="more info">
                <ChevronRightIcon />
            </Fab>
        </div>
    );
}


export default FloatingButtons