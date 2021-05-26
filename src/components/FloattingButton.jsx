import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from './Button'

const FloatingButtons = () => {


    return (

        <Button
            content={<ChevronRightIcon />}
            bgcolor="#1883ba"
            color="#fff"
            radius="50%"
            padding="8px 10px"
            aria-label="mas informacion"
        />


    );
}


export default FloatingButtons