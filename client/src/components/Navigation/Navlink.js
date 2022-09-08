import React from 'react';
import {Link} from 'react-router-dom';
import { Typography } from '@mui/material';
import { fontSize } from '@mui/system';


export default function NavigationLink ({link, name, icon}) {

    return (
        <Link className="nav-link" to={link}
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: "1em",
                    width: '100%',
                    color: '1e1e1e',
                    textDecoration: 'none',
                    }}
                >
                    <Typography variant="h6" sx={{
                        color: 'black',
                        fontSize: '1rem'
                        }}
                    >
                        {name ? name : "Link"}
                    </Typography>
                    {icon ? icon : null}
        </Link>
    )
}