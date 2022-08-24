import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput (props) {

    return (
        <TextField
            id="filled-basic" 
            label={props.label} 
            variant="filled"
            type={props.type ? props.type : 'text'}
            onChange={(e) => props.onChange(e.target.value)}
        />
    )

}