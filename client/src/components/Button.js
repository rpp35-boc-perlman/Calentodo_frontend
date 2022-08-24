import React from 'react';
import Button from '@mui/material/Button';

export default function Btn (props) {

    return (
        <Button 
            variant={props.variant ? props.variant : 'contained'}
            onClick={props.onClick}
        >
            { props.text ? props.text : 'No Text' }
        </Button>
    )

}