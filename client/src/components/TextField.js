import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput (props) {

    return (
        <TextField
            id="filled-basic" 
            label={props.label} 
            variant="filled"
            onChange={(e) => props.onChange(e.target.value)}
        />
    )

}