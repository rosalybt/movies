import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const ButtonSimple = ({ variant, color, content }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Button
                variant={variant}
                shape="rounded"
                color={color}>{content}
            </Button>
        </div>
    );
}

export default ButtonSimple
