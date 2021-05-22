import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

            '&:hover': {
                backgroundColor: 'transparent',
                color: '#3c52b2',
            }
        },
    },
}));
const ButtonSimple = ({ variant, color, content, icon }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant={variant}
                shape="rounded"
                color={color}
                startIcon={icon}
            >
                {content}
            </Button>
        </div>
    );
}

export default ButtonSimple
